

export default function ({children }:  {children : React.ReactNode}) {
    return  (
        <div className="w-full  h-screen">
<div className="p-2 h-10 bg-slate-100 w-full grid grid-cols-10">
        <div className="col-span-2 bg-red-300">Home</div>
        <div className="col-span-2 bg-red-100">🔎</div>
        <div className="col-span-1 col-start-8 bg-red-200">🔔</div>
        <div className="col-span-1 bg-red-300">⊕</div>
        <div className=" bg-red-400 col-span-1">Me</div>
    </div>
    <div className="h-full flex items-center justify-center bg-slate-100">{children}</div>
        </div>
    
    )
}