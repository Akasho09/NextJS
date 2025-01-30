"use server"
import {prisma} from '../client'

export async function signin(username:string , password:string) {
    const res =  await prisma.user.findUnique({
        where:{
            username : username ,
            hashedPass : password
        }
    })
    return res
}