import Image from "next/image";
import { SidebarTrigger } from "../ui/sidebar";

export default function HeaderComponent() {
  return (
    //bg-[#E9ECEF]
<div className="bg-[#E9ECEF] h-[70px] flex items-center sticky top-0 overflow-hidden border-4 shadow-lg shadow-[#CC7404]">
  <div className="flex w-full items-center justify-center px-4 flex-1">
    <a href="">
      <Image src="/assets/images/ragnarok-text-logo2.png" alt="" width={200} height={0} />
    </a>
    <div className="hidden md:flex flex-1 justify-end h-full items-center">
      <nav className="h-full">
        <ul className="flex items-center gap-10 pr-10 list-none h-full uppercase">
          <li><a href="" className="hover:text-yellow-500 ">Inicial</a></li>
          <li><a href="" className="hover:text-yellow-500">Quem somos</a></li>
          <li><a href="" className="hover:text-yellow-500">Loja</a></li>
          <li><a href="" className="hover:text-yellow-500">Equipe</a></li>
          <li><a href="" className="hover:text-yellow-500">Discord</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <SidebarTrigger className=" md:hidden size-[50px] mr-3 bg-amber-500 justify-center self-center" />
</div>


  );
}
