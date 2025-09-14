import { Home, Library, ShoppingBasket } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"


const menu_items = [
  {
    title: "Início",
    url: "/",
    icon: Home
  },
  {
    title: "Quem somos",
    url: "/",
    icon: Library
  },
  {
    title: "Loja",
    url: "/",
    icon: ShoppingBasket
  }
]

export default function AppSideBar(){
  return (
    <Sidebar variant="floating">
      <SidebarContent className="bg-[#212529] flex">
        <SidebarGroup className="bg-pink-500 h-full items-center justify-center flex">
          <SidebarGroupLabel>RagnarokCraft - Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex">
              {menu_items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}