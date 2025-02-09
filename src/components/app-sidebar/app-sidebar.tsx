import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
    subItem: [
      {
        title: 'Inbox',
        url: '#',
      },
      {
        title: 'Calendar',
        url: '#',
      },
    ],
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
    subItem: [{
      title: 'Inbox',
      url: '#',
    }]
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.subItem ? (
                  // Collapsible menu item (has subItems)
                  <Collapsible
                    key={item.title}
                    defaultOpen
                    className='group/collapsible'
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className='flex items-center gap-2'>
                          <item.icon className='w-5 h-5' />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItem.map((sub) => (
                            <SidebarMenuSubItem key={sub.title}>
                              <a
                                href={sub.url}
                                className='flex items-center gap-2 px-4 py-2'
                              >
                                <span>{sub.title}</span>
                              </a>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  // Regular menu item (no subItems)
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className='flex items-center gap-2'>
                      <item.icon className='w-5 h-5' />
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
