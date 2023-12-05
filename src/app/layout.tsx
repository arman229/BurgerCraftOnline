import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Myheader} from "@/components/header";
import {Myfooter} from "@/components/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Burger craft',
    description: 'Make burgar with your own hand',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={'max-w-screen-lg mx-auto  '}>

        <div >
          <Myheader />

          {children}

          <Myfooter />
        </div>
        </body>


        </html>
    )
}
