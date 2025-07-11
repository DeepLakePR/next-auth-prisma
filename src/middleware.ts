import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(req){

    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                const isAuth = !!token;
                const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");
                return !isDashboard || isAuth;
            }
        }
    }

)

export const config = {
    matcher: ["/dashboard/:path*"]
}
