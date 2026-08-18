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

export const sendNewSubmissionNotification = async ({
  trackingId,
  assay,
  gene,
  variant,
  personal,
}) => {
  try {
    await resend.emails.send({
      from: "noreply@variant2treatment.bio",

      // Account that should receive notifications
      to: "variant2treatment.rigshospitalet@regionh.dk",

      subject: `New variant submission - ${gene} ${variant}`,

      html: `
        <h2>New variant submission received</h2>

        <p>A new variant has been submitted through the Variant to Treatment platform.</p>

        <h3>Variant information</h3>
        <p><strong>Tracking ID:</strong> ${trackingId}</p>
        <p><strong>Assay:</strong> ${assay}</p>
        <p><strong>Gene:</strong> ${gene}</p>
        <p><strong>Variant:</strong> ${variant}</p>

        <h3>Submitted by</h3>
        <p><strong>Name:</strong> ${personal.fullName}</p>
        <p><strong>Institution:</strong> ${personal.institution}</p>
        <p><strong>Email:</strong> ${personal.email}</p>

        ${
          personal.comments
            ? `<h3>Comments</h3><p>${personal.comments}</p>`
            : ""
        }

        <p>Please access the administration platform for further details.</p>
      `,
    });

    console.log("Internal notification email sent successfully");
  } catch (error) {
    console.error("Internal notification email error:", error);
  }
};