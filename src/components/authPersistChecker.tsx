'use client';

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

declare module "next-auth" {
    interface Session {
        remember?: boolean;
    }
}

export function SessionChecker() {

    const { data: session, status } = useSession();

    useEffect(() => {
        if(status === "authenticated" && !session?.remember){

            const timer = setTimeout(() => {
                signOut({ callbackUrl: "/login" });

            }, 30 * 60 * 1000);

            return () => clearTimeout(timer);

        }
    }, [session, status]);

    return null;

}
