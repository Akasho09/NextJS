## WHY
1. React maintains formtend and backend seprately.
2. Requires Router-dom for routing.
3. React isnt SEO optimzed  : Google doesnt recognoize what the web contains as the index.htnl only contains refrebnces of the fules and npopt contents.  
4. Waterfalling problem:  sending requesrs one after other  and not  getting all things at once . 

Why?
- No cors issues, single domain name for your FE and BE
Ease of deployment, deploy a single codebase

# set up

npx create next-app@latest

## tailwind.config
- if App router selected => remove ./page sand ./components and theme also.  
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
} satisfies Config;


## 
npm install 
npm run dev


## 
wrap a folder in () ,    to ignore in routing .


## async componenets 
used for server side rendering 
add loaders.

## use neonDb

##  import { useRouter } from "next/navigation"
not /route