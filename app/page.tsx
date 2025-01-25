import axios from 'axios'

async function getUserDetails (){
//  await new Promise((resolve) => setTimeout(resolve, 5000));

  // const res = await axios.get('http://localhost:3000/api');
  return  "Home Page"
}


export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            Home Page
            {userData}
           </div>
    </div>
</div>
  );
}
