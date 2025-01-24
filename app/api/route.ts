


export function  GET (req:string){
    console.log(req)
// DB call
return Response.json({
    name  : "akash" ,  
    email : "akash9@gmail.com" 
})
}