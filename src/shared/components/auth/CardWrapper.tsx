import React from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/shared/ui/card"
import { Header } from './Header';
import { Social } from './Social';
import BackButton from './BackButton';

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
} : CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md mx-auto ">
        <CardHeader>
            <Header label = {headerLabel}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
                <Social />
            </CardFooter>
        )}
        <CardFooter>
            <BackButton href={backButtonHref} label={backButtonLabel} />
        </CardFooter>
    </Card>
  )
}