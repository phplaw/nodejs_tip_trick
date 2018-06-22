### SEND EMAIL IN NODEJS
_ to send email in nodejs we using nodemailer <https://github.com/nodemailer/nodemailer> _

transporter.sendMail({
  from: 'foo@bar.com'.
  to: 'bar@foo.com',
  subject: 'An Attached File',
  text: 'Check out this attached pdf file',
  attachments: [{
    filename: 'file.pdf',
    path: 'C:/Users/Username/Desktop/somefile.pdf',
    contentType: 'application/pdf'
  }], function (err, info) {
     if(err){
       console.error(err);
       res.send(err);
     }
     else{
       console.log(info);
       res.send(info);
     }
  });
  
  //https://nodemailer.com/message/attachments/
//https://community.nodemailer.com/using-attachments/
//http://www.voidcn.com/article/p-xrhfzilw-brh.html
