import { ChangeEvent } from "react";

interface LabelledInput  {
    label : string ,
    placeholder : string , 
    type : string,
    onchange : (e:ChangeEvent<HTMLInputElement>)=>void
}

export function LabelledInput({ label, placeholder, type , onchange}: LabelledInput) {
    return (
        <div>
            <div className="w-full min-w-[200px] py-2">
                <label className={`block mb-2 text-sm text-slate-600 flex items-center p-1`}>{label}</label>
                <input
                    type={type}
                    className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border--200 rounded-md px-1 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow p-2`}
                    placeholder={placeholder}
                    onChange={onchange}
                />
            </div>
        </div>
    );
}