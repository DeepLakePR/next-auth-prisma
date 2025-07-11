import { findUserByCredentials } from "@/lib/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "E-mail", type: "email" },
                password: { label: "Senha", type: "password" },
            },
            async authorize(credentials, req) {
                
                if (!credentials) return null;
                
                const user = await findUserByCredentials(credentials.email, credentials.password);

                if (user) {
                    // Ensure the returned user object matches NextAuth's User type
                    return {
                        id: String(user.id),
                        email: user.email,
                    };
                }

                return null;
            }
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
            if(url.startsWith(baseUrl)) return url;
            if(url.startsWith("/")) return baseUrl + url;
            return baseUrl;
        }
    },
    pages: {
        signIn: "/login",
    }
};

export default NextAuth(authOptions);
