import { NewVerificationForm } from "@/shared/components/auth/NewVerificationForm";
import { Suspense } from "react";


const NewVerificationPage = () => {
    return (
        <div className="min-h-screen flex items-center">
            <Suspense>
                <NewVerificationForm />
            </Suspense>
        </div>
    );
}
 
export default NewVerificationPage;