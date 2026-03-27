import "dotenv/config";
import { Resend } from "resend";
import OrderConfirmationEmail from "../emails/OrderConfirmation.jsx";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOrderConfirmation = async (email, fullName, trackingId) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // change to your verified sender (noreply@variant2treatment.dk)
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