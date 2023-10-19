import type { Metadata } from "next"
import "../css/globals.scss"

export const metadata: Metadata = {
    icons: [
        {
            url: "/favicon/favicon.ico",
            type: "image/ico",
            rel: "icon"
        },
        {
            url: "/favicon/favicon-16x16.png",
            type: "image/png",
            rel: "icon",
            sizes: "16x16"
        },
        {
            url: "/favicon/favicon-32x32.png",
            type: "image/png",
            rel: "icon",
            sizes: "32x32"
        }
    ],
    title: "Главная"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    )
}
