'use client';

import { SessionChecker } from "@/components/authPersistChecker";
import { Button } from "@/components/ui/button";
import { SessionProvider, signOut } from "next-auth/react";

export default function DashboardPage() {

    function logout(){
        signOut({ callbackUrl: "/login" });
    }

    return (
        <SessionProvider>
            <SessionChecker />

            <p>
                Você está na página dashboard.
            </p>

            <Button onClick={logout}>Sair</Button>

        </SessionProvider>
    )

}
