const controller = require("../controllers/contact.controller");
const nodemailer = require('nodemailer');

module.exports = function(app) {

   app.post("/api/contact", (req, res) =>{
      const htmlEmail = `
         <!DOCTYPE html>
         <html>
            <head>
               <style>
   
               </style>
            </head>
            <body>
               <div style="width:650px; background-color:white; border:#c7c3c3; border-width:1px; border-style: solid;">
                     <div style="display: flex; margin-left: 50px; margin-right: 50px; justify-content: space-between;">
                        <div style="width: 45%; margin-top: 16px;">
                           <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">First name:</h1>
                           <input type="text"  value="firstname" style="padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                        </div>
                        <div style="width: 45%; margin-top: 16px;">
                           <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Last name:</h1>
                           <input type="text"  value="name" style="padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                        </div>
                     </div>
                     <div style="display: flex; margin-left: 50px; margin-right: 50px; justify-content: space-between;">
                        <div style="width: 45%; margin-top: 16px;">
                           <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Email:</h1>
                           <input type="text"  value="asd@adsd.com" style="padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                        </div>
                        <div style="width: 45%; margin-top: 16px;">
                           <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Phone nunber:</h1>
                           <input type="text"  value="12324" style="padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                        </div>
                     </div>
                     <div style="display: flex; margin-left: 50px; margin-right: 50px; justify-content: center">
                        <div style="width: 100%; margin-top: 16px;">
                           <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Message:</h1>
                           <input type="message"
                           rows="5" cols="60" value="message"  style="padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly>
                        </div>
                     <div>
               </div>
            </body>
         </html>  
      `;
    let mailerConfig = {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "HonnenTitusv@gmail.com",
            pass: "adonis0129",
        },
    };
    let transporter = nodemailer.createTransport(mailerConfig);
  
    let mailOptions = {
        from: "<HonnenTitusv>@gmail.com>",
        to: "HonnenTitusv@gmail.com",
        subject: "HireCrypto.com",
        text: "Contact Us",
        html: htmlEmail,
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("error:", err);
            res
            .status(500)
            .send({ status: "FAIL", msg: "Internal error: email not sent" });
        } else {
            console.log("Message sent: %s", info.content);
            console.log("Message URL: %s", nodemailer.getTestMessageUrl);
            res.status(200).json({ status: "OK", msg: "Thank you! Your submission has been received!" });
        }
    });
   });
 
};
