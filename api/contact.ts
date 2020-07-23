import { STATUS_CODES } from "http";
import sgMail from "@sendgrid/mail";
import { NowRequest, NowResponse } from "@vercel/node";
import { object, string } from "yup";

// FIXME: setup sentry
sgMail.setApiKey(process.env.FBWD_SENDGRID_API_KEY);

export default async (request: NowRequest, response: NowResponse) => {
  response.setHeader(
    "Access-Control-Allow-Origin",
    "https://www.fideldywelldrilling.com"
  );

  const { origin } = request.headers;
  if (request.headers.origin.includes("localhost")) {
    response.setHeader("Access-Control-Allow-Origin", origin);
  }

  if (request.method === "OPTIONS") {
    response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    response.setHeader("Access-Control-Max-Age", String(86400));
    response.status(200).json({});
    return;
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({
      message: STATUS_CODES[405],
    });
    return;
  }

  const schema = object().shape({
    name: string().required(),
    phone: string(),
    email: string().email().required(),
    message: string().required(),
  });

  try {
    schema.validate(JSON.parse(request.body));
  } catch (error) {
    response.status(400).json({
      message: STATUS_CODES[400],
    });
    return;
  }

  try {
    const { name, phone, email, message } = JSON.parse(request.body);
    await sgMail.send({
      to:
        email === "bmealhouse@gmail.com"
          ? email
          : "troy@fideldywelldrilling.com",
      from: `${name} <${email}>`,
      subject: "Message from https://www.fideldywelldrilling.com",
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}

${message}`,
    });
  } catch (error) {
    // Error is an instance of SendGridError
    // The full response is attached to error.response
    if (error.response) {
      console.error(error.response.body);
      response.status(500).json({
        message: STATUS_CODES[500],
      });
      return;
    } else {
      console.error(error);
    }
  }

  response.status(200).json({});
};
