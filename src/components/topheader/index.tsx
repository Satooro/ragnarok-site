'use client';
import { useState } from "react";
import { DiscordIcon, DiscordIconColored, InstagramIcon, TiktokIcon, YoutubeIcon } from "../exports/icons"
import { Mail } from "lucide-react";

export default function TopHeaderComponent(){
  const [discordHover, setDiscordHover] = useState(false);
  return (
    // E9ECEF
    <div className="hidden h-[50px] bg-[#F8F9FA] md:flex justify-center">
      <div className="md:flex items-center p-4 flex-row">
        <a href="mailto:contato@ragnarokcraft.com?subject=Contato RagnarokCraft&body=Entrando em contato através do site" className="flex gap-1 items-center hover:text-[#CC7404]">
        <Mail className="size-[20px]"/>
          <span className="hover:text-[#CC7404]">contato@ragnarokcraft.com</span>
        </a>
      </div>
      <div className="w-full flex p-4 justify-end items-center gap-3">
        <a href="">
          {/* <InstagramIcon className="hover:stroke-pink-400" width={32} stroke="black"/> */}
          <TiktokIcon className="hover:stroke-blue-500" width={32} />
        </a>
        <a href="">
          <YoutubeIcon className="hover:stroke-red-700" width={32} stroke="black"/>
          {/* <Youtube /> */}
        </a>



        <a 
        href="" 
        className="group"
        onMouseEnter={() => setDiscordHover(true)}
        onMouseLeave={() => setDiscordHover(false)}
        >
          {discordHover ? <DiscordIconColored className="transition-opacity duration-300 group-hover:0" width={32} /> : <DiscordIcon className="transition-opacity duration-300 opacity-100" width={32} />}
          
        </a>
      </div>
      
    </div>
  )
}