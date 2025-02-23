import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmLink = process.env.FRONTEND_ORIGIN + `/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "noreply@movietime.studio",
        to: email,
        subject: "Confirm your email",
        html: `<h2> Welcome my new friend and glad to see you here </h2> <hr> <p>For confirmation please click <a href="${confirmLink}"> here </a> </p>`
    });
};


export const sendPasswordResetEmail = async (
    email: string,
    token: string
) => {
    const resetLink = process.env.FRONTEND_ORIGIN + `/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "noreply@movietime.studio",
        to: email,
        subject: "Reset your password",
        html: `<p>For reset your password, please click <a href="${resetLink}"> here </a> </p>`
    });
};