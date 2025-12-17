import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

(async () => {
  try {
    const response = await resend.emails.send({
      from: "SN Collections <contact@sncollections.lk>",
      to: "sncollection230@gmail.com",
      subject: "Test Email ✅",
      html: "<h1>This is a test email</h1>",
    });
    console.log("Test send response:", response);
  } catch (err) {
    console.error("Test send error:", err?.response || err);
  }
})();
