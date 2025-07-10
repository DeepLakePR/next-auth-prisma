'use client';

// Form
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

// Components
import Image from "next/image";

import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Schemas
const loginSchema = z.object({
    email: z.email("E-mail inválido"),
    password: z.string().min(8, "Sua senha possui no mínimo 8 caracteres"),
    rememberMe: z.boolean().optional(),
})

export default function LoginPage(){

    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false
        }
    })

    function onSubmit(values: z.infer<typeof loginSchema>){
        console.log(values);
    }

    
    return (
        <section className="login flex items-center justify-center">

            <div className="container rounded-[20px] py-10 pb-8 px-6 m-8 bg-white">
                
                <div className="logo">
                    <Image 
                        src="/auth/logo.png" 
                        className="mx-auto"
                        alt="Logo" 
                        width={200} 
                        height={100} 
                    />
                </div>

                <div className="page-switcher justify-between w-65 flex my-8 rounded-4xl bg-[#F5F7FD] p-1 mx-auto">
                    <Button className="button-switcher active">Entrar</Button>
                    <Button className="button-switcher"><Link href="/register">Cadastrar</Link></Button>
                </div>

                <Form {...loginForm}>

                    <h2 className="font-bold text-3xl mb-2 text-2xl">Entrar</h2>
                    <p className="mb-8 text-lg text-[#697889]">Non sit purus tempus malesuada poten</p>

                    <form onSubmit={loginForm.handleSubmit(onSubmit)}>
                        
                        <FormField control={loginForm.control} name="email" render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel className="mb-1">E-mail</FormLabel>

                                <FormControl>
                                    <Input className="py-6 px-4" placeholder="e-mail@website.com" {...field} />
                                </FormControl>

                                <FormMessage />

                            </FormItem>
                        )} 
                        />

                        <FormField control={loginForm.control} name="password" render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel className="mb-1">Senha</FormLabel>

                                <FormControl>
                                    <Input className="py-6 px-4" placeholder="min 8 caracteres" {...field} />
                                </FormControl>

                                <FormMessage />

                            </FormItem>
                        )} 
                        />

                        <div className="flex justify-between items-center my-6 mt-2">

                            <FormField control={loginForm.control} name="rememberMe" render={({ field }) => (
                                <FormItem>

                                    <div className="flex">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                name={field.name}
                                                ref={field.ref}
                                            />
                                        </FormControl>

                                        <FormLabel className="ml-2">Lembrar</FormLabel>
                                    </div>

                                    <FormMessage />
                            
                                </FormItem>
                            )} 
                            />

                            <Link href="#forgot-password" className="link">Esqueceu a senha?</Link>

                        </div>

                        <Button type="submit" className="w-full py-6 px-12 mb-4">Entrar</Button>

                        <Button type="button" className="w-full py-6 px-12 text-gray-700 bg-white hover:bg-gray-100 border border-gray-300 shadow-xs">
                            <img src="/auth/google-icon.png" alt="Google auth" className="p-2 w-[40px] h-[40px]"/>
                            Entrar com o Google
                        </Button>
                        
                    </form>

                </Form>

                <p className="text-center mt-6">Ainda não tem conta? <Link href="/register" className="link">Assine agora</Link></p>

            </div>

            <div className="lg:w-45 lg:bg-red-100 lg:relative lg:h-full">
                
                <img src="/auth/auth-background.png" className="fixed h-full w-full inset-0 z-[-1] lg:static" />
                <h2 className="hidden lg:block text-3xl color-white">
                    A Revolução do<br/>
                    Marketing por<br/>
                    <span className="color-[#4FD8CD]">Influência</span>
                </h2>

            </div>

        </section>
    );

}
