import { NextRequest } from "next/server";
import checkHash from "@/hooks/hashCheck";
import { PrismaClient } from "@prisma/client";
const aksh =  new PrismaClient()
export async function POST (req : NextRequest){
    const body = await req.json();
    // const headers = req.headers.get("Auth");//headers
    // const queryParams = req.nextUrl.searchParams.get("id") // query params
    const user = await aksh.user.findUnique({
    where:{
        username : body.username,
    }
   })
   if(!user){
    return Response.json({
        message : "User Doesnt Exist",
        success : false
    })} else {
    if(await checkHash(body.password , user.hashedPass)){
        return Response.json({
            message : "Logged in !!",
            success    : true
        })} else {
            return Response.json({
                message : "Invalid Password ",
                success    : false
        })
    }
}
}