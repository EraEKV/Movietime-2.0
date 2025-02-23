"use client";

import { z } from "zod";

import React, { useEffect, useState } from 'react'
import { CardWrapper } from './CardWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewPasswordSchema } from '@/features/auth/schemas';
import { useTransition } from "react";
 
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/shared/ui/form"

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/features/auth/new-password";

export const NewPasswordForm = () => {
    const searchParams = useSearchParams();

    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>(""); 
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof NewPasswordSchema>> ({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: ""
        }
    });

    useEffect(() => {
        setToken(searchParams.get("token"));
    }, [searchParams]);

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            newPassword(values, token)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                });
        });
    };


  return (
    <CardWrapper 
        headerLabel={'Enter a new password'} 
        backButtonLabel={'Back to sign in'} 
        backButtonHref={'/auth/sign-in'}
    >
        <Form {...form}>
            <form 
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="password"
                        render = {({ field }) => 
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        disabled={isPending}
                                        placeholder="*****"
                                        type="password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }
                    >
                    </FormField>

                   
                </div>
                <FormError message={ error } />
                <FormSuccess message={ success } />
                <Button 
                    disabled={isPending} 
                    type="submit"
                    className="w-full ">
                    Reset password
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}