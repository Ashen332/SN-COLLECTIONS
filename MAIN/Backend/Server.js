import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const app = express();


const allowedOrigins = [
  "https://sncollections.lk",
  "https://www.sncollections.lk",
  "http://localhost:3000",
  "http://localhost:5173", // for local testing
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman or server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));


app.use(express.json());

// ✅ Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("SN Collections backend running ✅");
});

// 🛍️ Order Email API
app.post("/send-order", async (req, res) => {
  const order = req.body;
  if (!order) return res.status(400).json({ error: "Missing order data" });

  try {
    await resend.emails.send({
      from: "SN Collections <onboarding@resend.dev>", // You can replace with your verified domain later
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
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
        <p style="margin-top:15px;">Check your dashboard or WhatsApp for confirmation.</p>
      `,
    });

    console.log("✅ Order email sent via Resend");
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Email send error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 📩 Contact Form Email API
app.post("/send-contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ success: false, error: "All fields required" });

  try {
    await resend.emails.send({
      from: "SN Collections <onboarding@resend.dev>",
      to: process.env.OWNER_EMAIL,
      subject: `📩 New Message from ${name}`,
      html: `
        <h3>New Customer Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    console.log("✅ Contact message sent via Resend");
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Contact email error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
