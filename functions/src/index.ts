const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const nodemailer = require('nodemailer');



let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kevinnuevo48@gmail.com',
    pass: 'quierounacontra48',
  },
});


exports.factura = functions.https.onCall(async (data: any) => {
  console.log(data)
  try {
    let body= `<p>Nombre: ${data.user} Apellidos: ${data.last}</p><br><br>
               <p>Correo: ${data.email}</p><br><br>
               <p>RFC: ${data.rfc}</p><br><br>
               <p>Razón Social: ${data.razon}</p><br><br>
               <p>Dirección: ${data.direccion}</p><br><br>
               `

    var mailOptions = {
            from: {
              name: `${data.user}`,
              address: `<${data.email}>`
          }, // Something like: Jane Doe <janedoe@gmail.com>
            to: `${data.empresa}`,
            subject: 'Solicito borrar mi información', // email subject
            html: body, // email content in HTML
    }

          // returning result
          transporter.sendMail(mailOptions, function(error:any, response:any){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }

            // if you don't want to use this transport object anymore, uncomment following line
            //smtpTransport.close(); // shut down the connection pool, no more messages
        });

  } catch (error) {
    console.log(error);
    return { error: true, ...error };
  }
});
