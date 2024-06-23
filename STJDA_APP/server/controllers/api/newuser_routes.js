const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../../models');
const { config } = require('dotenv');
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
            ID: null,
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
            ID: null,
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
        specialNeeds={
            CareDataID: null,
            SpecialNeedType: req.body.otherDiagnosis,
            Notes: null,
            SpecialNeedInstructions: null
        }
        insulinCarbRatio = {
            CareDataID: null,
            RatioBreakfast: req.body.InsulinToCarbRatio.Breakfast,
            RatioLunch: req.body.InsulinToCarbRatio.Lunch,
            RatioDinner: req.body.InsulinToCarbRatio.Dinner,
        }
    }   
        try {
            // Check for duplicate user
            const Model = userData.role === 'camper' ? db.Camper : db.Volunteers;

            ///read ops/////////////////////////////////////////////////////////////////////
            const duplicateUser = await Model.findOne({ where: { email: userData.Email } });
            ////////////////////////////////////////////////////////////////////////////////

            if (duplicateUser) {
                await Model.destroy({ where: { email: userData.Email } });
                // if theres a duplicate user redirect or send an erro such as bad response
                // return res.status(409).json({ message: "Email already exists." });
            }
            if (!req.body.email || !req.body.password) {
                return res.status(400).json({ message: "Email and password are required." });
            }

            // convert userData.email into an ID string
            const emailBuffer = Buffer.from(userData.Email);
            const emailArray = new Uint8Array(emailBuffer);
            // Convert to a single number string
            let stringID = '';
            emailArray.forEach((byte) => {
                stringID += byte.toString();
            });
            userData.ID = stringID;

            // Create user either volunteer or camper
            const newUser = await Model.create(userData);
            // remove the Photo base 64 string
            const { Photo, ...jwtData } = newUser.dataValues;
            // grab the models associated with the camper
            const CamperModels = userData.role === 'camper' ? true : false;
            // if we are making a camper do this
            if (CamperModels) {
                console.log(insulinCarbRatio) 
                try{
                    // links the camperModel to the care Data model
                    Object.assign(careData, { ID: stringID, CamperID: stringID });
                    console.log("careDataID's " + careData.ID + " : " + careData.CamperID)
                    // create all the tables
                    return
                    const CareData = db.CareData;
                    const InsulinCarbRatio = db.InsulinCarbRatios;
                    const SpecialNeeds = db.SpecialNeed;
                    const Origins = db.OriginsData;

                    // calculate campers age
                    const bDay = new Date(originsData.DateOfBirth);
                    const today = new Date();
                    let age = today.getFullYear() - bDay.getFullYear();
                    const m = today.getMonth() - bDay.getMonth();
                    if (m < 0 || (m === 0 && today.getDate() < bDay.getDate())) {
                        age--;
                    }
                    // create careData table
                    const careDataWithCamperID = {...careData, CamperID: stringID};
                    const newCareData = await CareData.create(careDataWithCamperID);
                    if(!newCareData){
                        console.log('Failed to create care data');
                    }
                    // create orgigins table for camper
                    originsData.DateOfBirth = age;
                    originsData.CamperID = stringID;
                    // assigns the unit8 string to the camper ID, and the rest of the data to the var originsDataWithCamperID
                    const originsDataWithCamperID = {...originsData, CamperID: stringID };
                    const newOrigins = await Origins.create(originsDataWithCamperID);
                    if(!newOrigins){
                        console.log('Failed to create origins data');
                    }
                    return
                    // create special needs table
                    const specialNeedsWithCareDataID = {...specialNeeds, CareDataID: newCareData.ID};
                    const newSpecialNeeds = await SpecialNeeds.create(specialNeedsWithCareDataID);
                    if(!newSpecialNeeds){
                        console.log('Failed to create special needs data');
                    }
                    // create insulin carb ratio table
                    const insulinCarbRatioWithCareDataID = {...insulinCarbRatio, CareDataID: newCareData.ID};
                    const newInsulinCarbRatio = await InsulinCarbRatio.create(insulinCarbRatioWithCareDataID);
                    if(!newInsulinCarbRatio){
                        console.log('Failed to create insulin carb ratio data');
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