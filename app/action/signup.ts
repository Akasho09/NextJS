"use server"
import {prisma} from '../client'

export async function signup(username:string , password:string) {
    const res =  await prisma.user.create({
        data:{
            username : username ,
            hashedPass : password
        }
    })
    return res;
}