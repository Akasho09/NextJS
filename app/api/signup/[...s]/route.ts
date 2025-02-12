import { NextRequest } from "next/server";

export function GET (req  : NextRequest, {params : {s}} : {params:{ s:[]} } ){

    return Response.json({
        message : 'signup bckend 2',
        routes : s
    })
}