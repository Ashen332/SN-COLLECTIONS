import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ---------------- CORS ---------------- */
const allowedOrigins = [
  "https://sncollections.lk",
  "https://www.sncollections.lk",
  "http://localhost:3000",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("CORS blocked"));
    },
  })
);

app.use(express.json());

/* ---------------- RESEND ---------------- */
const resend = new Resend(process.env.RESEND_API_KEY);

/* ---------------- HEALTH ---------------- */
app.get("/", (_, res) => {
  res.send("SN Collections backend running ✅");
});

/* ---------------- CONTACT ---------------- */
app.post("/send-contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  console.log("📨 Contact message received:", req.body);

  try {
    await resend.emails.send({
      // ✅ WORKING sender (no domain verification required)
      from: "SN Collections <no-reply@resend.dev>",
      to: process.env.OWNER_EMAIL,
      subject: `📩 New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Contact email sent");
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Resend error:", err?.response || err);
    res.status(500).json({
      success: false,
      error: err?.message || "Email failed",
    });
  }
});

/* ---------------- ORDER ---------------- */
app.post("/send-order", async (req, res) => {
  console.log("🛍️ Order received:", req.body);

  try {
    await resend.emails.send({
      from: "SN Collections <no-reply@resend.dev>",
      to: process.env.OWNER_EMAIL,
      subject: "🛍️ New Order Received",
      html: `<pre>${JSON.stringify(req.body, null, 2)}</pre>`,
    });

    console.log("✅ Order email sent");
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Order email error:", err?.response || err);
    res.status(500).json({
      success: false,
      error: err?.message || "Order email failed",
    });
  }
});

/* ---------------- START ---------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
