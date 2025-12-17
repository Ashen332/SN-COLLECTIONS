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
    console.log("⚠️ Contact request missing fields:", req.body);
    return res.status(400).json({ success: false, error: "All fields required" });
  }

  console.log("📨 Contact message received:", req.body);

  try {
    const response = await resend.emails.send({
      from: "SN Collections <contact@sncollections.lk>",
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

    console.log("✅ Contact email sent from verified domain:", response);
    res.json({ success: true, data: response });
  } catch (err) {
    console.error("❌ Contact email error:", err?.response || err);
    res.status(500).json({
      success: false,
      error: err?.message || "Email failed",
    });
  }
});

/* ---------------- ORDER ---------------- */
app.post("/send-order", async (req, res) => {
  const order = req.body;
  console.log("🛍️ Order received:", order);

  if (!order || Object.keys(order).length === 0) {
    console.log("⚠️ Order request is empty");
    return res.status(400).json({ success: false, error: "Missing order data" });
  }

  try {
    const response = await resend.emails.send({
      from: "SN Collections <contact@sncollections.lk>",
      to: process.env.OWNER_EMAIL,
      subject: `🛍️ New Order from ${order.name}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Name:</strong> ${order.name}</p>
        <p><strong>Email:</strong> ${order.email}</p>
        <p><strong>Phone:</strong> ${order.phone}</p>
        <p><strong>Address:</strong> ${order.address}, ${order.city}, ${order.postal}</p>
        <p><strong>Payment Method:</strong> ${order.payment === "cod" ? "Cash on Delivery" : "CDM Deposit"}</p>
        <p><strong>Total Amount:</strong> LKR ${order.total.toLocaleString()}</p>

        <h3>🧾 Order Items</h3>
        <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%;">
          <thead style="background-color:#f5f5f5;">
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
                </tr>
              `
              )
              .join("")}
          </tbody>
        </table>

        <p style="margin-top:15px;">Check your dashboard for confirmation.</p>
      `,
    });

    console.log("✅ Order email sent from verified domain:", response);
    res.json({ success: true, data: response });
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
