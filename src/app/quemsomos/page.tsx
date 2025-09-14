import HeaderComponent from "@/components/header";
import AppSideBar from "@/components/sidebar";
import TopHeaderComponent from "@/components/topheader";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function QuemSomos() {
  return (
    <div className="flex">
      <SidebarProvider defaultOpen={false}>
        <AppSideBar />
        <header className="w-screen">
          <TopHeaderComponent />
          <HeaderComponent />
        </header>
        <main className="h-300">

        </main>

        <footer>

        </footer>
      </SidebarProvider>
    </div>
  )
}