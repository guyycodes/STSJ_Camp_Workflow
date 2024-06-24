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

// '/api/login' endpoint
router.post('/', async (req,res)=>{
    try{
        // find the user by email
        const camper = db.Camper;
        const volunteer = db.Volunteers;;
        ///read ops/////////////////////////////////////////////////////////////////////
        const camperData = await camper.findOne({ where: { email: req.body.email } });
        const volunteerData = await volunteer.findOne({ where: { email: req.body.email } });
        ////////////////////////////////////////////////////////////////////////////////
        if(!camperData && !volunteerData){
            res.cookie('STJDA_No_User', {
                httpOnly: false,
                secure: false,
                sameSite: 'Lax',
                path: '/',
                maxAge: 3000  // Expire after 30 seconds
              })
            
            return res.redirect(409, 'http://localhost:5173/profile');
            // Create user either volunteer or camper
        }
        if (camperData) {
            console.log('Camper data found');
            userData = {...camperData.dataValues};
            const validateCamper = await db.Camper.checkPassword(req.body.password, req.body.email);
            if(validateCamper){
                console.log('Camper password is valid');
            }else{
                console.log('Camper password is invalid');
                return res.redirect(409, 'http://localhost:5173/profile');
            }
        } else {
            console.log('Volunteer data found');
            userData = {...volunteerData.dataValues};
            const validVolunteer = await db.Volunteers.checkPassword(req.body.password, req.body.email);
            if(validVolunteer){
                console.log('Volunteer password is valid');
            }else{
                return res.redirect(409, 'http://localhost:5173/profile');
            }
        }
        // Now userData can be used without the photo
        const { Photo, ...jwtData } = userData;
        console.log(jwtData); 
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
            // Redirect after setting the cookie and sending the cookie
            res.redirect(200, 'http://localhost:5173/profile');
        }
    }catch(err){
        console.error({message: "Error in post route: ", Error: err})
        return res.status(500).json({message: 'Error session interrupted unexpectedly: Session will refresh in 30 min'})
    }
})
module.exports = router;