"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export function AuthRedirect({ children }: { children: React.ReactNode }){

    const { data: session, status } = useSession();

    useEffect(() => {

        if(status === "authenticated"){
            window.location.href = "/dashboard";

        }

    }, [session, status]);

    if(status === "loading" || session){
        return null;

    }

    return <>{children}</>

}
