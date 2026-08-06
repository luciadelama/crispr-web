import "dotenv/config";
import { Resend } from "resend";
import OrderConfirmationEmail from "../emails/OrderConfirmation.jsx";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOrderConfirmation = async (email, fullName, trackingId) => {
  try {
    await resend.emails.send({
      from: "noreply@variant2treatment.bio", // change to your verified sender
      to: email,
      subject: "Variant submission received",
      react: OrderConfirmationEmail({
        fullName,
        trackingId,
      }),
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email error:", error);
  }
};