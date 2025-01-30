import { prisma } from "./client";

async function getUserDetails (){
 const data = await prisma.user.findFirst()
  return  {
    username : data?.hashedPass
  }
}
//  above is backend , in frontend.
export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            {userData?.username}
           </div>
    </div>
</div>
  );
}
