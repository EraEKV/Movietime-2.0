"use client";

import { z } from "zod";

import React, { useState } from 'react'
import { CardWrapper } from './CardWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ResetSchema } from '@/features/auth/schemas';
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
import { reset } from "@/features/auth/reset";

export const ResetForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>(""); 
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ResetSchema>> ({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: ""
        }
    });

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            reset(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
    };


  return (
    <CardWrapper 
        headerLabel={'Forgot your password?'} 
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
                        name="email"
                        render = {({ field }) => 
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        disabled={isPending}
                                        placeholder="movietime@example.com"
                                        type="email"
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
                    Send reset email
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}