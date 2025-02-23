import { NewPasswordForm } from "@/shared/components/auth/NewPasswordForm";
import { Suspense } from "react";

const NewPasswordPage = () => {
    return (
        <Suspense>
            <div className="min-h-screen flex flex-col justify-center">
                <NewPasswordForm />
            </div>
        </Suspense>
    );
}
 
export default NewPasswordPage;