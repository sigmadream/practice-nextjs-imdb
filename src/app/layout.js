import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import SearchBox from "@/components/SearchBox"
import Providers from "./Providers"

import "./globals.css"


export const metadata = {
    title: "IMDB::Clone",
    description: "IMDB Clone with Next.js v13",
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <Header/>
            <Navbar/>
            <SearchBox/>
            {children}
        </Providers>
        </body>
        </html>
    )
}
