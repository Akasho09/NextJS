import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import hashIt from "@/hooks/hashIt";
const aksh = new PrismaClient()
export async function POST (req  : NextRequest) {
    const body = await req.json();
    const hashedPass= await hashIt(body.password)
   await aksh.user.create({
        data:{
            username : body.username,
            hashedPass
        }
    })
    // db call
return Response.json({
    message : 'Recieved Data ',
    sucess:  true
})
}

export function GET (req  : NextRequest){
    return Response.json({
        message : 'signup bckend ',
    })
}