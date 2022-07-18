// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Data, ApiError } from "types";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const validateField = (value: string, field: string): boolean => {
  switch (field) {
    case "name":
      return /^[\w -]+$/.test(value) && value.length > 2;
    case "phone":
      return /^[\d]+$/.test(value) && value.length === 11;
    case "email":
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
    case "subject":
      return /^(contact|quote|feedback|other)$/i.test(value);
    case "content":
      return /^[^{}*#|\\\][]+$/.test(value);
    default:
      return false;
  }
};

const message = {
  from: `Contact From (simplydeclutter.co.uk) <${process.env.MAILER_USER}>`,
  to: process.env.MAILER_RECEIVER,
  replyTo: "",
  subject: "",
  text: "",
  html: "",
};

const transport = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: Number(process.env.MAILER_PORT),
  secure: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
} as SMTPTransport.Options);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const errors: ApiError[] = [];
    const body = JSON.parse(req.body);

    Object.keys(body).forEach((key) => {
      const field = body[key];
      const isValid = validateField(field, key);
      if (!isValid) {
        errors.push({ field: key, value: field });
      }
    });

    if (errors.length > 0) {
      res.status(500).json({
        success: false,
        message: "Failed to validates fields",
        errors,
      });
    } else {
      message.replyTo = body.email;
      message.html = `<p>${body.content}</p>`;
      message.text = body.content;
      message.subject = body.subject;
      // Send message
      transport.sendMail(message, (err, info) => {
        if (!!err) {
          throw new Error(err.message);
        }
      });
      // Respond to the user
      res.status(200).json({ success: true, message: "Success" });
    }
  } catch (e) {
    res.status(501).json({
      success: false,
      message: "There has been an error with the server",
    });
  }
}
