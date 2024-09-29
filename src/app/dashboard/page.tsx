'use client'

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../_components/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { handleSignOut } from "../_utils/cognito-actions";

export default function Dashboard() {
    return (
        <SignOutButton/>
    );
}

function SignOutButton() {
    const { pending } = useFormStatus();
    const [ errorMessage, dispatch ] = useFormState(handleSignOut, undefined);
  
    return (
        <form action={dispatch}>
            <Button type="submit" className="mt-4 w-full" aria-disabled={pending}>
                Sign Out <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
        </form>
    );
}