import { Resend } from "resend";

const resend = new Resend("re_VyZkubKn_MaocUR4ppqEEEzEqQUsa32xp");

async function sendTestEmail() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sncollection230@gmail.com",
      subject: "Resend Test Email ✅",
      html: "<p>Congrats! Your backend can now send emails 🎉</p>",
    });
    console.log("📨 Email sent successfully:", data);
  } catch (error) {
    console.error("❌ Email failed:", error);
  }
}

sendTestEmail();
