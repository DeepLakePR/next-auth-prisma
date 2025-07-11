'use server';

import db from "@/lib/db";

import { hashSync } from "bcrypt-ts";

import { registerSchema } from "@/lib/schemas/register";
import z from "zod";

export default async function registerAction(formData: z.infer<typeof registerSchema>): Promise<true | false> {

    const data = formData as {email: string, password: string};

    const userCreated = await db.user.create({
        data: {
            email: data.email,
            password: hashSync(data.password)
        }
    })

    if(userCreated){
        return true;
        
    }
    
    return false;

}
