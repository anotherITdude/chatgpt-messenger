'use-client'
import Image from "next/image"
import chatgptLogo from './../public/ChatGPT-Logo1.png'

const Login = () => {
   return (
     <div className="flex flex-col bg-[#00A67E] h-screen justify-center items-center text-white">
       <p className="text-sm">This app uses google authentication for login.</p>
       <Image
         src={chatgptLogo}
         width={200}
         alt="chatgpt logo"
         className="animate-spin-slow"
       />
       <button className="text-xl animate-bounce">Login to use chat gpt</button>
     </div>
   )
 }
 
 export default Login
 