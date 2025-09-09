import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import type { PropsWithChildren } from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'NósPsi',
  description:
    'Todo mundo carrega nós. Aqui, você encontra um lugar para desatar, compreender e se reconectar',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased bg-secondary-lightest text-primary`}
      >
        <SidebarProvider>
          <div className="block sm:hidden">
            <AppSidebar />
          </div>
          <main className="w-full">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  )
}
