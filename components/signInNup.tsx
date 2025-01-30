"use client"
import { useState } from "react"
import { LabelledInput } from "./LabelledInput"
import axios from 'axios'
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignInNup ({type} : {type:"signin" | "signup"}){
    const router = useRouter()
    const [username , setUsername] = useState("");
    const [password,setPassword] =  useState("");
    async function handleclick(){
       const res =  await axios.post(`http://localhost:3000/api/${type}`, {
        username ,
        password
       })
       if(res.data.sucess) router.push('/')
       else alert(res.data.message)
       }
    return <div className="">
        <h3 >{type==="signin" ? "New User ! " :  "Already a User"}
    <Link href={type==="signin"? "/signup" : "/signin"} ><b>{type==="signin"? " Sign Up " : ' Sign In ' }</b></Link>
        </h3> <LabelledInput 
           onchange={(e)=>{
            setUsername(e.target.value)
           }}
           label="Username" placeholder="akash09" type="text"></LabelledInput>
        <LabelledInput label="Password" placeholder="!)(@#%^&" type="password"
        onchange={(e)=>{
            setPassword(e.target.value)
        }}
        ></LabelledInput>
        <button
        onClick={handleclick}
        className="mt-4 w-full bg-blue-700 border border-grey-2 rounded p-1 ">{type==="signin" ? "Login" : "Sign Up"}</button>
    </div>
}
// export function LabelledInput({ label, placeholder , required , type}: LabelledInput) {
// 