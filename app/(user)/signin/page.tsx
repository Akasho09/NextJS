"use client"
import { LabelledInput } from "@/components/LabelledInput"

export default function () {
    
    return  <div className="border border-black p-4 rounded bg-slate-400">
    <LabelledInput type="text" required={true} label={"Username "} placeholder="username" ></LabelledInput> 
    <LabelledInput type="text" required={true} label={"Password "} placeholder="Enter password" ></LabelledInput> 
    <LabelledInput type="text" required={true} label={"Email "} placeholder="akash@gmail.com" ></LabelledInput> 
    <button onClick={()=>{
        console.log("Button clicked ! ")
    }} className="bg-blue-800 mt-2 ml-2 p-2"> SignIn </button>
    </div>
}

