'use client';

import { SessionChecker } from "@/components/authPersistChecker";
import { SessionProvider } from "next-auth/react";

export default function DashboardPage() {

    return (
        <SessionProvider>
            <SessionChecker />

            <p>
                You are at the dashboard page.
            </p>
        </SessionProvider>
    )

}
