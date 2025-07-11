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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import registerAction from "./registerUser";
// import { register } from "module"; // Remove unused import

// Schemas
export const registerSchema = z.object({
    email: z.email("E-mail inválido"),
    password: z.string().min(8, "Sua senha precisa ter no mínimo 8 caracteres"),
    confirmPassword: z.string().min(8, "Confirme sua senha"),
    acceptTerms: z.literal(true, "Você precisa concordar com os Termos e Condições"),
}).refine((data) => data.password === data.confirmPassword, {
    error: "As senhas precisam ser iguais",
    path: ['confirmPassword']
})

// Page
export default function RegisterPage(){

    const registerForm = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    function onSubmit(values: z.infer<typeof registerSchema>){
        registerAction(values);
    }
    
    return (
        <section className="login flex">

            <div className="container rounded-[20px] py-10 pb-8 px-6 m-8 bg-white lg:pr-[50%]">
                
                <div className="logo">
                    <Image 
                        src="/auth/logo.png" 
                        className="mx-auto lg:mx-0"
                        alt="Logo" 
                        width={200} 
                        height={100} 
                    />
                </div>

                <div className="page-switcher justify-between w-65 flex my-8 rounded-4xl bg-[#F5F7FD] p-1 mx-auto lg:mx-0 lg:my-12">
                    <Link className="button-switcher" href="/login">Entrar</Link>
                    <Link className="button-switcher active" href="#">Cadastrar</Link>
                </div>

                <Form {...registerForm}>

                    <h2 className="font-bold text-3xl mb-2 text-2xl">Cadastrar</h2>
                    <p className="mb-8 text-lg text-[#697889]">Non sit purus tempus malesuada poten</p>

                    <form onSubmit={registerForm.handleSubmit(onSubmit)}>
                        
                        <FormField control={registerForm.control} name="email" render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel className="mb-1">E-mail</FormLabel>

                                <FormControl>
                                    <Input type="email" className="py-6 px-4" placeholder="e-mail@website.com" {...field} />
                                </FormControl>

                                <FormMessage />

                            </FormItem>
                        )} 
                        />

                        <FormField control={registerForm.control} name="password" render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel className="mb-1">Senha</FormLabel>

                                <FormControl>
                                    <Input type="password" className="py-6 px-4" placeholder="min 8 caracteres" {...field} />
                                </FormControl>

                                <FormMessage />

                            </FormItem>
                        )} 
                        />

                        <FormField control={registerForm.control} name="confirmPassword" render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel className="mb-1">Confirmar Senha</FormLabel>

                                <FormControl>
                                    <Input type="password" className="py-6 px-4" placeholder="Digite a mesma senha escolhida" {...field} />
                                </FormControl>

                                <FormMessage />

                            </FormItem>
                        )} 
                        />

                        <FormField control={registerForm.control} name="acceptTerms" render={({ field }) => (
                            <FormItem className="my-6 mt-2">

                                <div className="flex">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            name={field.name}
                                            ref={field.ref}
                                        />
                                    </FormControl>

                                    <FormLabel className="ml-2">Concordo com os <span className="font-bold text-primary cursor-pointer">Termos e Condições</span></FormLabel>
                                </div>

                                <FormMessage />
                        
                            </FormItem>
                        )} 
                        />

                        <Button type="submit" className="w-full py-6 px-12 mb-4">Cadastrar</Button>

                        <Button type="button" className="w-full py-6 px-12 text-gray-700 bg-white hover:bg-gray-100 border border-gray-300 shadow-xs">
                            <img src="/auth/google-icon.png" alt="Google auth" className="p-2 w-[40px] h-[40px]"/>
                            Entrar com o Google
                        </Button>
                        
                    </form>

                </Form>

                <p className="text-center mt-6">Já tem conta? <Link href="/register" className="link">Entre aqui</Link></p>

            </div>

            <div className="right-0 lg:w-[45%] lg:h-full lg:bg-red-100 lg:fixed self-start">

                <img src="/auth/auth-background.png" className="fixed h-full w-full inset-0 z-[-1] lg:static object-cover" />
                <h2 className="hidden lg:block text-4xl text-[#1B1D28] w-80 font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    A Revolução do<br/>
                    Marketing por<br/>
                    <span className="text-[#4FD8CD]">Influência</span>
                </h2>

            </div>

        </section>
    );

}
