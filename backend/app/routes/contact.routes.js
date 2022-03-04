
const nodemailer = require('nodemailer');

module.exports = function(app) {
   app.post("/api/contact", (req, res) =>{
      const htmlEmail = `
      <!DOCTYPE html>
      <html>
          <body>
              <div style="width:650px; background-color:white; border:#c7c3c3; border-width:1px; border-style: solid;">
                <div style="text-align: center;">
                    <div style="margin-top:57px">
                        <div
                            style="font-size:40px; font-family: sans-serif; font-weight: bold; text-align:center"
                        >
                            Contact Us
                        </div>
                    </div>                  
                </div>
                  <div style="display: flex; margin-left: 50px; margin-right: 50px;">
                      <div style="width: 45%; margin-top: 16px; margin-right: 10%;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">First name:</h1>
                          <input type="text"  value="${req.body.firstName}" style="border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                      </div>
                      <div style="width: 45%; margin-top: 16px;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Last name:</h1>
                          <input type="text"  value="${req.body.lastName}" style="border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                      </div>
                  </div>
                  <div style="display: flex; margin-left: 50px; margin-right: 50px;">
                      <div style="width: 45%; margin-top: 16px; margin-right: 10%;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Email:</h1>
                          <input type="text"  value="${req.body.email}" style="border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                      </div>
                      <div style="width: 45%; margin-top: 16px;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Phone nunber:</h1>
                          <input type="text"  value="${req.body.phoneNumber}" style="border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                      </div>
                  </div>
                  <div style="display: flex; margin-left: 50px; margin-right: 50px;">
                      <div style="width: 100%; margin-top: 16px; margin-bottom: 57px;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Message:</h1>
                          <textarea type="message" rows="5" cols="30"  style="text-align:start; border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: 19px; font-family: unset; width: -webkit-fill-available;" readonly>${req.body.message}
                          </textarea>
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
            user: "hirecryptoteam@gmail.com",
            pass: "Upwork123!",
        },
    };
    let transporter = nodemailer.createTransport(mailerConfig);
  
    let mailOptions = {
        from: "<hirecryptoteam>@gmail.com>",
        to: "hirecryptoteam@gmail.com",
        subject: "HireCrypto.com",
        text: "Contact Us",
        html: htmlEmail,
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("error:", err);
            res
            .status(500)
            .send("Error!, Please send again!");
        } else {
            console.log("Message sent: %s", info.content);
            console.log("Message URL: %s", nodemailer.getTestMessageUrl);
            res.status(200).json("Thank you! Your submission has been received!");
        }
    });
   });
 
};
