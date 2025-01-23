
interface LabelledInput  {
    label : string ,
    placeholder : string , 
    required: boolean,
    type : string,
}

export function LabelledInput({ label, placeholder , required , type}: LabelledInput) {
    return (
        <div>
            <div className="w-full min-w-[200px] py-2">
                <label className={`block mb-2 text-sm text-slate-600 flex items-center`}>{label}<h6 className="text-xs text-red-400 pl-3"></h6>                </label>
                <input
                    type={type}
                    className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border--200 rounded-md px-1 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                    placeholder={placeholder}
                    required = {required}
                />
            </div>
        </div>
    );
}