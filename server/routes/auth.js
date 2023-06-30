const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const nodemailer = require('nodemailer');
const JWT_SECRET = 'Wearegoodboys';


// const fetch = require("node-fetch");
// const Cookies = require("universal-cookie");
// const authType =  "user"; // user or client
// const tokenURL = "https://8fb626e7trial.authentication.us10.hana.ondemand.com/oauth/token";
// const clientId = "sb-e42726b9-8796-4e6a-92fe-213d350d2e95!b156459|it!b55215";
// const clientSecret = "146f9806-32c6-4cdb-9d24-2d388d1c0ccf$QdPNmiwPdif8e5kZ_M3QxPXfl7W9n-qB-3-lXJ9_ePE=";


//ROUTE 1: Create a user using: POST "/api/auth/newuser". (Login not required)
router.post('/newuser', [
     body('email', 'Enter a valid email').isEmail(),
     body('password', 'Password must be atleast 8 characters ').isLength({ min: 8 }),
], async (req, res) => {
     success = false;
     //If there are any error, return Bad request and the error message. 
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ success, errors: errors.array() });
     }
     //Check whether the email is unique or not for every user.
     try {
          let user = await User.findOne({ email: req.body.email });
          if (user) {
               return res.status(400).json({ success, error: "Sorry a user with this email already exists message by delevoper ankit" })
          }

          const salt = await bcrypt.genSalt(10);
          secPass = await bcrypt.hash(req.body.password, salt);
          secPass2 = await bcrypt.hash(req.body.password, salt);
          // console.log(secPass);
          // console.log(secPass2);

          //create a new user
          user = await User.create({
               password: secPass,
               email: req.body.email,
          });

          const data = {
               user: {
                    id: user.id
               }
          }
          const authtoken = jwt.sign(data, JWT_SECRET);

          // res.json(user)
          success = true;
          res.json({ success, authtoken })

     } catch (error) {
          console.log(error.message);
          res.send("Some error Occured");
     }
})

//ROUTE 2: Authenticate a user using: POST "/api/auth/loginuser". (Login not required)
router.post('/loginuser', [
     body('email', 'Enter a valid email').isEmail(),
     body('password', 'Password must be atleast 8 characters').exists(),
], async (req, res) => {
     success = false
     //If there are any error, return Bad request and the error message. 
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
     }

     const { email, password } = req.body;
     try {
          let user = await User.findOne({ email });
          if (!user) {
               success = false
               return res.json({ error: "Please try to login with correct credentials" });
          }

          const passwordCompare = await bcrypt.compare(password, user.password);
          if (!passwordCompare) {
               success = false;
               return res.json({ success, error: "Incorrect details::Please try to login again" });
          }

          const data = {
               user: {
                    id: user.id
               }
          }
          const authtoken = jwt.sign(data, JWT_SECRET);
          success = true;
          res.json({ success, authtoken })

     } catch (error) {
          console.log(error.message);
          res.send("Internal Server Error");
     }
});

//ROUTE 3: Get loogedin user details using: POST "/api/auth/userdetails". (Login not required)
router.post('/userdetails', fetchuser, async (req, res) => {
     try {
          userId = req.user.id;
          const user = await User.findById(userId).select("-password")
          res.send(user)
     } catch (error) {
          console.log(error.message);
          res.send("Internal Server Error");
     }
})

//ROUTE 4: Authenticate a user using: POST "/api/auth/forgot". (Login not required)
router.post('/forgot', [
     body('email', 'Enter a valid email').isEmail(),
], async (req, res) => {
     success = false
     //If there are any error, return Bad request and the error message. 
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
     }

     const { email } = req.body;
     try {
          let user = await User.findOne({ email });
          if (!user) {
               success = false
               return res.json({ error: "Please try to login with correct credentials" });
          }
          else {
               // Send the email
               await transporter.sendMail(mailOptions);
               res.sendStatus(200);
          }

          const data = {
               user: {
                    id: user.id
               }
          }
          const authtoken = jwt.sign(data, JWT_SECRET);
          success = true;
          res.json({ success, authtoken })

     } catch (error) {
          console.log(error.message);
          res.send("Internal Server Error");
     }
});


//ROUTE 5: Send a mail to Valid User: POST "/api/auth/sendmail". (Login not required)
router.post('/sendmail', [
     body('email', 'Enter a valid email').isEmail(),
], async (req, res) => {
     success = false
     //If there are any error, return Bad request and the error message. 
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
     }

     const { email } = req.body;

     const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
               user: 'sameer9934227802@gmail.com',
               pass: 'cmjnxdinaqqiwxqn',
          },
     });

     const mailOptions = {
          from: 'sameer9934227802@gmail.com',
          to: email,
          subject: 'Reset Your Password',
          text: 'Here is your password reset link:',
          html: '<p>Click <a href="https://example.com/reset-password">here</a> to reset your password.</p>',
     };

     try {
          // Send the email
          await transporter.sendMail(mailOptions);
          res.sendStatus(200);
     } catch (error) {
          console.error('Error sending email:', error);
          res.sendStatus(500);
     }
});


// class Auth {

//      constructor() {
 
//          this.authType = authType.toLowerCase();
 
//          this.tokenURL = tokenURL;
 
//          this.clientId = clientId;
 
//          this.clientSecret = clientSecret;
 
//      }
 
 
 
//      getToken(req) {
 
//          const cookies = new Cookies(req.headers.cookie);
 
//          return cookies.get(cookieName);
 
//      }
 
 
 
//      async fetchToken(code, redirectUri) {
 
//          const params = new URLSearchParams();
 
//          params.set('client_id', this.clientId);
 
//          params.set('client_secret', this.clientSecret);
 
//          if (authType === "user") {
 
//              params.set('code', code);
 
//              params.set('redirect_uri', redirectUri);
 
//              params.set('grant_type', 'authorization_code');
 
//          } else {
 
//              params.set('grant_type', 'client_credentials');
 
//          }
 
//          const response = await fetch(`${this.tokenURL}/oauth/token`, {
 
//              method: 'POST',
 
//              headers: {
 
//                  'Content-Type': 'application/x-www-form-urlencoded',
 
//                  'Accept': 'application/json'
 
//              },
 
//              body: params
 
//          });
 
//          const json = await response.json();
 
//          return json.access_token;
 
//      }
 
 
 
//      getMiddleware() {
 
//          return async (req, res, next) => {
 
//              if (authType === "user") {
 
//                  let protocol = req.get("x-forwarded-proto") || req.protocol;
 
//                  let host = req.get("x-forwarded-host") || req.get("host");
 
//                  let redirectUri = `${protocol}://${host}${callbackURL}`;
 
//                  if (req.url.startsWith(callbackURL)) {
 
//                      const code = req.query.code;
 
//                      if (code) {
 
//                          debug("Fetching access token using code");
 
//                          const token = await this.fetchToken(code, redirectUri);
 
//                          res.cookie(cookieName, token, { maxAge: 1000 * 60 * cookieMaxAge, httpOnly: true, path: "/", });
 
//                      }
 
//                      res.redirect("/");
 
//                  } else if (!this.getToken(req)) {
 
//                      debug("No cookie so fetching authorization code");
 
//                      res.redirect(`${this.tokenURL}/oauth/authorize?client_id=${encodeURIComponent(this.clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`);
 
//                  } else {
 
//                      next();
 
//                  }
 
//              } else {
 
//                  if (!this.getToken(req)) {
 
//                      debug("No cookie so fetching access token using client credentials");
 
//                      const token = await this.fetchToken();
 
//                      res.cookie(cookieName, token, { maxAge: 1000 * 60 * cookieMaxAge, httpOnly: true, path: "/", });
 
//                      res.redirect(req.url);
 
//                  } else {
 
//                      next();
 
//                  }
 
//              }
 
//          };
 
//      }
 
//  }
 

module.exports = router
