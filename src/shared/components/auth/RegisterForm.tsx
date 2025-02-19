"use client"

import { z } from "zod";

import React, { useState } from 'react'
import { CardWrapper } from './CardWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/features/auth/schemas';
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
import { register } from "@/features/auth/register";

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>(""); 
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>> ({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
    }

  return (
    <CardWrapper 
        headerLabel={'Create an account!'} 
        backButtonLabel={'Already have an account?'} 
        backButtonHref={'/sign-in'}
        showSocial
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

                    <FormField
                        control={form.control}
                        name="name"
                        render = {({ field }) => 
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        disabled={isPending}
                                        placeholder="John Doe"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }
                    >
                    </FormField>

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
                                        placeholder="your password"
                                        type="password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }
                    >
                    </FormField>
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button 
                    disabled={isPending} 
                    type="submit"
                    className="w-full ">
                    Create an account 
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}