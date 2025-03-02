"use server";

import * as z from "zod";
import { RegisterSchema } from "./schemas";
import bcrypt from "bcryptjs";
import { db } from "@/shared/api/db";
import { getUserByEmail } from "@/entities/user/api/user";
import { generateVerificationToken } from "@/entities/user/api/tokens";
import { sendVerificationEmail } from "./mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, name, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if(existingUser) return { error: "Email already in use!" };

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    }); 

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
    );

    return { success: "Confirmation email has sent!" };
}