"use client";

import { z } from "zod";

import React, { useEffect, useState } from 'react'
import { CardWrapper } from './CardWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/features/auth/schemas';
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
import { login } from "@/features/auth/login";
// import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
    // const searchParams = useSearchParams();
    // const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    //     ? "Email already in use with different provider"
    //     : "";

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>(""); 
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>> ({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "" 
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
    }

    const [urlError, setUrlError] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const error = params.get("error") === "OAuthAccountNotLinked"
            ? "Email already in use with different provider"
            : "";
        setUrlError(error);
    }, []);

  return (
    <CardWrapper 
        headerLabel={'Welcome back!'} 
        backButtonLabel={'Dont have an account?'} 
        backButtonHref={'/auth/sign-up'}
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
                <FormError message={ error || urlError } />
                <FormSuccess message={ success } />
                <Button 
                    disabled={isPending} 
                    type="submit"
                    className="w-full ">
                    Login
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}