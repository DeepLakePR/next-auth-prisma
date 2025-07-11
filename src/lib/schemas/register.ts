import { z } from 'zod';

export const registerSchema = z.object({
    email: z.email("E-mail inválido"),
    password: z.string().min(8, "Sua senha precisa ter no mínimo 8 caracteres"),
    confirmPassword: z.string().min(8, "Confirme sua senha"),
    acceptTerms: z.literal(true, "Você precisa concordar com os Termos e Condições"),
}).refine((data) => data.password === data.confirmPassword, {
    error: "As senhas precisam ser iguais",
    path: ['confirmPassword']
})
