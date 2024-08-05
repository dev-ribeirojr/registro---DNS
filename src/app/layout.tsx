import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['900', '400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'ImobDesk',
  description: 'Cadastro de DNS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'p-6')}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
