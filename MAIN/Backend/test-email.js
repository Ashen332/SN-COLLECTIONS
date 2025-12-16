import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.OWNER_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function testMail() {
  try {
    const info = await transporter.sendMail({
      from: `"SN Collections Test" <${process.env.OWNER_EMAIL}>`,
      to: process.env.OWNER_EMAIL,
      subject: "✅ Gmail SMTP Test Successful",
      text: "If you received this email, Gmail SMTP is working perfectly.",
    });

    console.log("✅ Email sent:", info.response);
  } catch (err) {
    console.error("❌ Email failed:", err.message);
  }
}

testMail();
