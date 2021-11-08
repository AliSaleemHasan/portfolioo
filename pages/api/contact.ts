import type { NextApiRequest, NextApiResponse } from "next";
let nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  secure: true,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWARD,
  },
});
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mailData = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `Message From ${req.body.name}`,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err)
      res.status(404).json({
        success: false,
        message: "error sending email",
      });
    else
      res.status(200).json({
        success: true,
        message: "email sent ",
      });
  });
}
