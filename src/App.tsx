import { ThemeProvider } from '@/components/theme-provider/theme-provider';
// import Counter from "./components/Counter"
import { ModeToggle } from './components/theme-provider/mode-toggle';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar/app-sidebar';
import { Skeleton } from './components/ui/skeleton';
// import Chart from '@/components/ui/chart'

function App({ children }: { children: React.ReactNode }) {
  // const cookieStore = await cookies()
  const defaultOpen = true; //cookieStore.get("sidebar_state")?.value === "true"

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      {/* 
      <Counter /> */}
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main>
          <div className='flex-1 flex items-center justify-center'>
            <SidebarTrigger />
            Application Name <ModeToggle />
          </div>
          
          {/* {children} */}
        </main>
        <div className='mx-10 my-10'>
            <Skeleton className='w-[50px] h-[50px] rounded-full' />
            <Skeleton className='my-1 w-[100px] h-[20px] rounded-full' />
            <Skeleton className='my-1 w-[290px] h-[20px] rounded-full' />
            <Skeleton className='my-1 w-[290px] h-[20px] rounded-full' />
          </div>
          {/* <Chart /> */}
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
