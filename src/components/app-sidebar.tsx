import { X } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { MenuMain } from './navigation'

export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarHeader className="flex flex-row items-center">
        <SidebarTrigger
          icon={<X className="text-primary" />}
          className="flex sm:hidden"
        />
        <h2 className="text-lg text-primary pt-0.5">Menu</h2>
      </SidebarHeader>
      <SidebarContent>
        <MenuMain />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
