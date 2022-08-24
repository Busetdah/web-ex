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
      html: `<p>Company Name : ${body.company_name}</p><p>Name : ${body.name}</p>
      <p>City : ${body.city}</p><p>Country : ${body.country}</p><p>Phone Number : ${body.phone}</p> 
      <p>Email : ${body.email}</p><div>${body.message}</div><p>Sent from:
      ${body.email}</p><p>Product : ${body.product}</p>`
    }
    transporter.sendMail(mailData)
  }
  
