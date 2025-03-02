"use server";

import * as z from "zod";

import { ResetSchema } from "./schemas";
import { getUserByEmail } from "@/entities/user/api/user";
import { generatePasswordResetToken } from "@/entities/user/api/tokens";
import { sendPasswordResetEmail } from "./mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "Invalid email" };
    }

    const { email } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser) {
        return { error: "Email not found" };
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    );

    return { success: "Reset email sent!" };
}