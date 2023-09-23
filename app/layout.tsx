import type { Metadata } from "next"
import "../css/globals.scss"

export const metadata: Metadata = {
    icons: {
        icon: "/favicon/favicon.ico",
        apple: "/favicon/apple-touch-icon.png"
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    )
}
