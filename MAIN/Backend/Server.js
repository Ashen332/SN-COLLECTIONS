import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("📩 OWNER_EMAIL:", process.env.OWNER_EMAIL);

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
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

/* ---------------- GMAIL SMTP ---------------- */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.OWNER_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

/* ---------------- HEALTH CHECK ---------------- */
app.get("/", (req, res) => {
  res.send("SN Collections backend running ✅");
});

/* ---------------- ORDER EMAIL ---------------- */
app.post("/send-order", async (req, res) => {
  const order = req.body;
  if (!order) return res.status(400).json({ error: "Missing order data" });

  try {
    await transporter.sendMail({
      from: `"SN Collections" <${process.env.OWNER_EMAIL}>`,
      to: process.env.OWNER_EMAIL,
      subject: `🛍️ New Order from ${order.name}`,
      html: `
        <h2>New Order Received</h2>
        <p><b>Name:</b> ${order.name}</p>
        <p><b>Email:</b> ${order.email}</p>
        <p><b>Phone:</b> ${order.phone}</p>
        <p><b>Address:</b> ${order.address}, ${order.city}, ${order.postal}</p>
        <p><b>Payment Method:</b> ${
          order.payment === "cdm" ? "CDM Deposit" : "Cash on Delivery"
        }</p>
        <p><b>Total Amount:</b> LKR ${order.total.toLocaleString()}</p>

        <h3>🧾 Order Items</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <thead style="background:#f5f5f5">
            <tr>
              <th>Product</th>
              <th>Color</th>
              <th>Size</th>
              <th>Qty</th>
              <th>Total (LKR)</th>
            </tr>
          </thead>
          <tbody>
            ${order.items
              .map(
                (item) => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.color}</td>
                  <td>${item.size}</td>
                  <td>${item.quantity}</td>
                  <td>${item.total.toLocaleString()}</td>
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
      `,
    });

    console.log("✅ Order email sent (Gmail SMTP)");
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Order email error:", err);
    res.status(500).json({ success: false, error: "Email failed" });
  }
});

/* ---------------- CONTACT EMAIL ---------------- */
app.post("/send-contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields required" });

  try {
    await transporter.sendMail({
      from: `"SN Collections" <${process.env.OWNER_EMAIL}>`,
      to: process.env.OWNER_EMAIL,
      subject: `📩 New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    console.log("✅ Contact email sent (Gmail SMTP)");
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Contact email error:", err);
    res.status(500).json({ success: false, error: "Email failed" });
  }
});

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
