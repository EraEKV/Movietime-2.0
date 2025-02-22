import { TriangleAlert } from "lucide-react";
import { CardWrapper } from "./CardWrapper";

export const ErrorCard = () => {
    return (
        <CardWrapper 
            headerLabel="Oops something went wrong"
            backButtonLabel="/auth/sign-in"
            backButtonHref="Back to sign in"
        >
            <div className="w-full flex justify-center items-center">
                <TriangleAlert className="text-rose-500" />
            </div>
        </CardWrapper>
    )
}