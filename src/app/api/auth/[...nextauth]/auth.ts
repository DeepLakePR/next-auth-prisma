import { findUserByCredentials } from "@/lib/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "E-mail", type: "email" },
                password: { label: "Senha", type: "password" },
                remember: { label: "Lembrar", type: "checkbox" },
            },
            async authorize(credentials, req) {
                
                if (!credentials) return null;
                
                const user = await findUserByCredentials(credentials.email, credentials.password);

                if (user) {
                    return {
                        id: String(user.id),
                        email: user.email,
                        remember: credentials.remember === "true"
                    };
                }

                return null;
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }){
            if(user){
                token.remember = user.remember;

                token.exp = Math.floor(Date.now() / 1000) + (user.remember ? 30 * 24 * 60 * 60 : 30 * 60)
            }
            return token;
        },
        async session({ session, token }: { session: any, token: any }){
            session.remember = token.remember;
            return session;
        },
        async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
            if(url.startsWith(baseUrl)) return url;
            if(url.startsWith("/")) return baseUrl + url;
            return baseUrl;
        }
    },
    session:{
        strategy: "jwt" as const,
        maxAge: 30 * 24 * 60 * 30
    },
    pages: {
        signIn: "/login",
    }
};

export default NextAuth(authOptions);
