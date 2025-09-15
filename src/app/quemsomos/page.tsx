import CarroselComponent from "@/components/carousel";
import HeaderComponent from "@/components/header";
import AppSideBar from "@/components/sidebar";
import TopHeaderComponent from "@/components/topheader";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function QuemSomos() {
  return (
<div className="flex flex-col w-full">
  <SidebarProvider defaultOpen={false} className="flex-col flex">
    <AppSideBar />
    <header className="w-full">
      <TopHeaderComponent />
      <HeaderComponent />
    </header>
    <main className="flex w-full h-screen">
      <CarroselComponent />
    </main>
    <footer className="w-full"></footer>
  </SidebarProvider>
</div>
  )
}