const User = require('../models/User');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpire } = require('../config/keys');
const { baseUrl } = require('../config/config');

var transporter = nodemailer.createTransport({
    host: 'mail.esftunisie.com',
    auth:{
        user:'faroukbr050@gmail.com',
        pass:'isamm@2020'
    }
});

exports.signupController = async (req, res) => {

    var verify = Math.floor((Math.random() * 10000000) + 1);

    var mailOption = {
        from :'faroukbr050@gmail.com', // sender this is your email here
        to : `${req.body.email}`, // receiver email2
        subject: "Account Verification",
        html:
        `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Bienvenue à eStores Factory</h2>
            <p>Félicitations ! Votre inscription est presque finie !
            Veuillez cliquer sur le bouton ci-dessous pour activer votre adresse mail et finaliser votre requête.
            </p>
            
            <a href="https://api.esftunisie.com/signin/?verify=${verify}" style="background: #27558e; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block; left:38%;position:relative;">click to activate</a>
        
           
            </div>
        `
    }


    const { username, email,numtel,role, password,verification } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                errorMessage: 'Email already exists',
            });
        }


        const newUser = new User();
        newUser.username = username;
        newUser.email = email;
        newUser.numtel=numtel;
        newUser.password=password;
        newUser.verification=verify;
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        transporter.sendMail(mailOption,(error,info)=>{
            if(error){
                console.log(error)
            }else{

                let userdata = {
                    email : `${req.body.email}`,
                }
                res.cookie("UserInfo",userdata);
                res.send("Your Mail Send Successfully")
            }
        })



        await newUser.save();
       
        res.json({
            successMessage: 'votre inscription à été effectuée avec succès,merci de se connecter',
        });
    } catch (err) {
        console.log('signupController error: ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
    }
};



exports.signinController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                errorMessage: 'Email invalide',
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                errorMessage: 'mot de passe invalide',
            });
        }

        const payload = {
            user: {
                _id: user._id,
            },
        };

        jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
            if (err) console.log('jwt error: ', err);
            const { _id, username, email, numtel,role } = user;

            res.json({
                token,
                user: { _id, username, email, numtel,role },
            });
        });
    } catch (err) {
        console.log('signinController error: ', err);
        res.status(500).json({
            errorMessage: 'Email et mot de passse invalides',
        });
    }
};
