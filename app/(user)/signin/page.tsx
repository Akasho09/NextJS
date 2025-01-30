// import {prisma} from '../../client'

// async function handleClick() {
//     const akash ="";
// prisma.user.create({
//     data:{
//         username : "ab" ,
//         hashedPass : "ab"
//     }
// })
// }
"use client"

import { useState } from "react"
import {signin} from '../../action/signin'
export default function () {
    const [username ,setUsername]=  useState("");
    const [pass,setPass]=  useState("");
const handleclick = ()=>{
  return signin(username,pass)
}
    // await handleClick();
    return <div className='p-4 border border-black rounded'>
        {/* <form action={handleclick}></form> */}

        <input type="text" onChange={(e)=>setUsername(e.target.value)}/>username
        <input type="text" onChange={(e)=>{setPass(e.target.value)}}/>password
        <button onClick={handleclick}>submit</button>
    </div>
}