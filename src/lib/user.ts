import { compareSync } from "bcrypt-ts";
import db from "./db";

type User = {
    id: number,
    email: string,
}

export async function findUserByCredentials(email: string, password: string): Promise<User | null> {

    const user = await db.user.findFirst({
        where: {
            email: email,
        }
    });

    if(!user){
        return null;

    }

    const passwordMatch = compareSync(password, user.password);

    if(passwordMatch){
        return { id: user.id, email: user.email };
    }

    return null;

}
