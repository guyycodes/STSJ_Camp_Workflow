const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../../models');
const { config } = require('dotenv');
const { update } = require('../../models/BGTargets');
config({ path: './.env' });
let userData = {};

// JWT setup
const jwtSecret = 'mysecretsshhhhh';
const jwtExpiration = '2h';

// 'api/signup/create' endpoint
// validate their email is good and not a duplicate
router.post('/create', async (req,res)=>{
    let userData;
    let originsData;
    let careData;
    let specialNeeds;
    let insulinCarbRatio;

    if (!req.body) {
        return res.status(400).json({ message: "Bad request, no data provided" });
    }else if(req.body.role === 'volunteer'){
        userData = {
            // ID: null,
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Email: req.body.email,
            Password: req.body.password,
            role: req.body.role,
            DateOfBirth: req.body.dateOfBirth,
            Phone: req.body.phone,
            Photo: req.body.profileImage,
            Notifications: req.body.notifications
        }
    }else if(req.body.role === 'camper'){
        userData = {
            ID: null,
            Photo: req.body.profileImage,
            Email: req.body.email,
            Password: req.body.password,
            Notifications: req.body.notifications,
            Phone: req.body.phone,
            Notes: "Testing for notes",
            CareDataID: null,
            OriginsID: null,
            role: req.body.role,
        }
        careData = {
            // ID: null,
            CareDataID: null,
            OriginsID: null,
            CamperID: null,
            CareType: null,
            OverTheCounterMeds: req.body.overTheCounterMeds,
            TargetBG: req.body.target,
            LastKnownBG: null,
            LastKnownBGTimestamp: null,
            CorrectionFactor: req.body.correctionFactor,
            MDI: null,
            CGM: null,
            InsulinPump: null,
            InsulinPumpModel: null,
            InsulinType: req.body.insulinType,
            DoctorName: null,
            DoctorEmail: null,
            DoctorPhone: null,
            Allergies: req.body.allergies,
            EmergencyContact: null,
        }
        originsData = {
            CamperID: null,
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Gender: null,
            Age: null,
            DateOfBirth: req.body.dateOfBirth,
            Mother: null,
            Father: null,
        }
        bgTargets = {
            CareDataID: null,
            TimeLabel: null,
            BGTargetBreakfast: null,
            BGTargetLunch: null,
            BGTargetDinner: null,
            BGTargetOther: null,
        }
        insulinCarbRatio = {
            CareDataID: null,
            RatioBreakfast: req.body.InsulinToCarbRatio.Breakfast,
            RatioLunch: req.body.InsulinToCarbRatio.Lunch,
            RatioDinner: req.body.InsulinToCarbRatio.Dinner,
        }
        carbIntake = {
            CareDataID: null,
            DateTaken: null,
            TimeLabel: null,
            CarbAmount: null,
        }
        longActingInsulin = {
            CareDataID: null,
            Dosage: null,
            LastAdministered: null,
            LastAdministeredDosage: null,
        }
        rapidActingInsulin = {
            CareDataID: null,
            Dosage: null,
            LastAdministered: null,
            LastAdministeredDosage: null,
        }
        specialNeeds={
            CareDataID: null,
            SpecialNeedType: req.body.otherDiagnosis,
            Notes: null,
            SpecialNeedInstructions: null
        }
    }   
        try {
            // Check for duplicate user
            const Model = userData.role === 'camper' ? db.Camper : db.Volunteers;
            console.log('Model: ', typeof Model);
            console.log("userData: ",userData)
           
            ///read ops/////////////////////////////////////////////////////////////////////
            const duplicateUserA = await db.Camper.findOne({ where: { email: userData.Email } });
            const duplicateUserB = await db.Volunteers.findOne({ where: { email: userData.Email } });
            ////////////////////////////////////////////////////////////////////////////////

            if (duplicateUserA || duplicateUserB) {
                return res.redirect(409, 'http://localhost:5173/error=Conflict');
            }
            // if something weird happened...not sure why this would occur
            if (!req.body.email || !req.body.password) {
                return res.status(400).json({ message: "Email and password are required." });
            }
            // Create user either volunteer or camper
            const newUser = await Model.create(userData);
            // remove the Photo base 64 string
            const { Photo, ...jwtData } = newUser.dataValues;
            // grab the models associated with the camper
            const CamperModels = userData.role === 'camper' ? true : false;
            // if we are making a camper do this
            if (CamperModels) {
 
                try{
                    // links the camperModel to the care Data model using a Database hook
                    const careDataWithCamperID = {...careData};
                    const newCareData = await db.Camper.associateCamperWithCareData(userData.Email,careDataWithCamperID, 5)
                    if(!newCareData){
                        console.log('Failed to create care data');
                    }else{
                        console.log("newCareData ",newCareData)
                        console.log('Care data created successfully');
                    }
                   // Destructure needed properties from newCareData
                    const { CamperID: cpID, ID: cdID } = newCareData.dataValues;

                    // calculate campers age////////////////////////
                    const bDay = new Date(originsData.DateOfBirth);
                    console.log('bday' + bDay) // bdayThu Jun 20 2024 19:00:00 GMT-0500 (Central Daylight Time)
                    const today = new Date();
                    let age = today.getFullYear() - bDay.getFullYear();
                    const m = today.getMonth() - bDay.getMonth();
                    if (m < 0 || (m === 0 && today.getDate() < bDay.getDate())) {
                        age--;
                    }
                
                    //////////////////////////////////////////////
                    // create orgigins table for camper
                    originsData.Age = age;  // set age
                    // assigns the data to the var originsDataWithCamperID
                    const originsDataWithCamperID = {...originsData, CamperID: cpID };
                    const newOrigins = await db.OriginsData.create(originsDataWithCamperID);
                    if(!newOrigins){
                        console.log('Failed to create origins data');
                    }

                    // bg target table
                    const bgTargetWithCamperID = {...bgTargets, CareDataID: cdID}
                    const newBgTarget = await db.BGTargets.create(bgTargetWithCamperID)
                    if(!newBgTarget){
                        console.log('Failed to create bg target data');
                    }

                    // create insulin carb ratio table
                    const insulinCarbRatioWithCareDataID = {...insulinCarbRatio, CareDataID: cdID};
                    const newInsulinCarbRatio = await db.InsulinCarbRatios.create(insulinCarbRatioWithCareDataID);
                    if(!newInsulinCarbRatio){
                        console.log('Failed to create insulin carb ratio data');
                    }
                    // carb intake table
                    const carbIntakeWithCareID = {...carbIntake, CareDataID: cdID};
                    const newCarbIntake = await db.CarbIntake.create(carbIntakeWithCareID);
                    if(!newCarbIntake){
                        console.log('Failed to create carb intake data');
                    }
                    // long acting insulin table
                    const longActingInsulinWIthCareID = {...longActingInsulin, CareDataID: cdID}
                    const newLongActingInsulin = await db.LongActingInsulin.create(longActingInsulinWIthCareID);
                    if(!newLongActingInsulin){
                        console.log('Failed to create long acting insulin data');
                    }
                    // rapid acting insulin table
                    const rapidActingINsulingWithCareID = {...rapidActingInsulin, CareDataID: cdID}
                    const newRapidActingInsulin = await db.RapidActingInsulin.create(rapidActingINsulingWithCareID);
                    if(!newRapidActingInsulin){
                        console.log('Failed to create rapid acting insulin data');
                    }
                    // create special needs table
                    const specialNeedsWithCareDataID = {...specialNeeds, CareDataID: cdID};
                    const newSpecialNeeds = await db.SpecialNeed.create(specialNeedsWithCareDataID);
                    
                    if(!newSpecialNeeds){
                        console.log('Failed to create special needs data');
                    }

                }catch(err){
                    console.log(err)
                } 
                
            } else {
                console.log('No models to search in since the role is not "camper".');
            }
            // Sign JWT
            const token = jwt.sign({ data: jwtData }, jwtSecret, { expiresIn: jwtExpiration });
            if(token){
                res.cookie('STJDA_token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'strict',
                    path: '/',
                    maxAge: 3600000  // Expire after 1 hour
                    });
                console.log('Cookie set successfully');
            }

            // Redirect after setting the cookie and sending the cookie
            res.redirect(200, 'http://localhost:5173/profile');
    }catch(err){
        console.error({ message: "Error in post route: ", err });
        res.status(500).json({ message: "Server error", error: err.message });
    }
})

module.exports = router;