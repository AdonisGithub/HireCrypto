
const nodemailer = require('nodemailer');

module.exports = function(app) {
   app.post("/api/contact", (req, res) =>{
      const htmlEmail = `
      <!DOCTYPE html>
      <html>
          <body>
              <div style="width:650px; background-color:white; border:#c7c3c3; border-width:1px; border-style: solid;">
                  <div style="margin-top:57px; display: flex; justify-content: center;">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAABNCAYAAAAVbK5tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTI0VDAzOjExOjIwKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMi0yNFQxNjozMTowMyswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMi0yNFQxNjozMTowMyswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5Y2RkOTYwNS02YmZkLWEwNDQtYTE0ZC04ODU2NjExYTE3MGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZDJkOGI0MDYtMTZlNS0zYzRlLWE0MTEtOWQxYmE5ZDQyZTk0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDJkOGI0MDYtMTZlNS0zYzRlLWE0MTEtOWQxYmE5ZDQyZTk0Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMmQ4YjQwNi0xNmU1LTNjNGUtYTQxMS05ZDFiYTlkNDJlOTQiIHN0RXZ0OndoZW49IjIwMjItMDItMjRUMDM6MTE6MjArMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWNkZDk2MDUtNmJmZC1hMDQ0LWExNGQtODg1NjYxMWExNzBhIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTI0VDE2OjMxOjAzKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wZjsOwAAGllJREFUeJztnXuUXFWd7z+/fc6pqq7upLuTdMibBAghECCgCEIwIk/BGbigXi8iyiwvDnpnZKlLB7lXubNwOcwwzh18gQ/ulQEcda5eRK/yGkAegoiEhzya2KSTkHT1M/2o6qo65+zf/eOc6np0dUIEgVvrfNbqVPd57LMf3/3bv/3b+1REVUlIaFXMG52BhIQ/JYnAE1qaROAJLU0i8ISWJhF4QkuTCDyhpUkEntDSJAJPaGkSgSe0NInAE1qaROAJLU0i8ISWJhF4QkuTCDyhpUkEntDSJAJPaGkSgSe0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" alt="logo">
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
