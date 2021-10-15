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
    let body= `

    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
               <p style="font-weight:bold;">Nombre: <span style="font-weight: normal;">${data.user} ${data.last}</span></p>
               <p style="font-weight: bold;">Correo: <span style="font-weight:normal">${data.email}</span></p>
               <p style="font-weight: bold;">RFC: <span style="font-weight:normal">${data.rfc}</span></p>
               <p style="font-weight: bold;">Razón Social: <span style="font-weight:normal">${data.razon}</span></p>
               <p style="font-weight: bold;">Dirección: <span style="font-weight:normal">${data.direccion}</span></p>
               `

    var mailOptions = {
            from: {
              name: `${data.user}`,
              address: `<${data.email}>`
          }, // Something like: Jane Doe <janedoe@gmail.com>
            to: `${data.empresa}`,
            subject: 'Solicitud de Factura Arbolitos', // email subject
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


exports.contacto = functions.https.onCall(async (data: any) => {
  console.log(data)
  try {
    let body= `

    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
               <p style="font-weight:bold;">Nombre: <span style="font-weight: normal;">${data.user} ${data.last}</span></p>
               <p style="font-weight: bold;">Correo: <span style="font-weight:normal">${data.email}</span></p><br><br>
               <p style="font-weight: bold;">Comentario: <span style="font-weight:normal">${data.comentario}</span></p>
               `

    var mailOptions = {
            from: {
              name: `${data.user}`,
              address: `<${data.email}>`
          }, // Something like: Jane Doe <janedoe@gmail.com>
            to: `${data.empresa}`,
            subject: `${data.asunto}`, // email subject
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


exports.hire = functions.https.onCall(async (data: any) => {
  console.log(data)
  try {
    let body= `

    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
               <p style="font-weight:bold;">Nombre: <span style="font-weight: normal;">${data.user} ${data.last}</span></p>
               <p style="font-weight: bold;">Correo: <span style="font-weight:normal">${data.email}</span></p>
               <p style="font-weight: bold;">Teléfono: <span style="font-weight:normal">${data.tel}</span></p>
               <p style="font-weight: bold;">C.P: <span style="font-weight:normal">${data.cp}</span></p>
               <p style="font-weight: bold;">Edad: <span style="font-weight:normal">${data.years}</span></p>
               <p style="font-weight: bold;">Nivel de Escolaridad: <span style="font-weight:normal">${data.school}</span></p>
               <p style="font-weight: bold;">Área de interes: <span style="font-weight:normal">${data.interest}</span></p><br>
               <p style="font-weight: bold;">Perfil: <span style="font-weight:normal">${data.perfil}</span></p>



               `

    var mailOptions = {
            from: {
              name: `${data.user}`,
              address: `<${data.email}>`
          }, // Something like: Jane Doe <janedoe@gmail.com>
            to: `${data.empresa}`,
            subject: 'Solicitud de Contratacíon', // email subject
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
