export default function (req, res) {
    require('dotenv').config()
    const body = req.body
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'apriantowpj@gmail.com',
        pass : process.env.password,
      }
    })
    const mailData = {
      from: 'contact.me@aprianto-wpj.codes',
      to: 'apriantowpj@gmail.com',
      subject: `Form submitted by ${body.name}`,
      text: " Message :" + body.message + " | Sent from: " + body.email,
      html: `<div>${body.message}</div><p>Sent from:
      ${body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    return res.status(200).send({data: 'success'})
  }
  