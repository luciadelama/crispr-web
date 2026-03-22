import { NextResponse } from "next/server";
import { Resend } from "resend";

import OrderConfirmationEmail from "../../frontend/src/emails/OrderConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    const { firstName, trackingId } = await request.json();
    await resend.emails.send({
        from: "Variant to Treatment <variant@varianttotreatment.com>",
        to: "delamadridlucia@gmail.com",
        subject: "Order Confirmation",
        react: OrderConfirmationEmail({ firstName, trackingId, email}),
    });

    return NextResponse.json({ 
        message: "Email sent successfully" 
    });
}