import { Button } from "@/shared/ui/button";
import Link from "next/link";


const BackButton = ({ href, label }: { href: string, label: string }) => {
    return ( 
        <Button variant="link" className='font-normal w-full size-sm text-accent' asChild>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
}
 
export default BackButton;