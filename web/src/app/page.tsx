import { User } from "lucide-react";
import Image from "next/image"
import nlw_logo from "../assets/nlw_logo.svg"

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      
      <div className="flex flex-col items-start justify-between px-28 py-16 relative     overflow-hidden border-r border-white/10 bg-[url(../assets/bg_stars.SVG)] bg-cover">
         <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-58 rounded-full blur-full">
         </div>

         <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-10 text-gray-500"/>
          </div>
            <p className="text-sm leading-snug max-w-[140px]">
              <span className="underline">Crie sua conta</span> e salve suas memórias!
            </p> 
         </a>

         <div className="space-y-5">

           <div>
            <Image src={nlw_logo} alt="NLW LOGO"/>
           </div>

           <div className="max-w[420px] space-y-1">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-white">Sua cápsula do tempo</h1>
            <p className="text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
           </div>
          
          <a href="" className="inline-block rounded-full bg-green-500 px-5 py-3 text-black font-alt text-sm uppercase leading-none hover:text-gray-50 hover:bg-green-700 transition-colors">CADASTRAR LEMBRANÇA</a>

         </div>



         <div className="text-sm leading-relaxed text-gray-200">
          <p>Feito com 💜 no NLW da <a target="_blank" href="https://rocketseat.com.br" className="underline hover:text-gray-100">Rocketseat</a></p>
         </div>
      </div>

      <div className="flex flex-col p-16 bg-[url(../assets/bg_stars.SVG)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">Você ainda não registrou nenhuma lembrança, comece a <a href="" className="underline hover:text-gray-50">criar agora!</a></p>
        </div>
      </div>
    </main>
  );
}
