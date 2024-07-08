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
        },
        {
            url: "/favicon/apple-touch-icon.png",
            type: "image/png",
            rel: "apple-touch-icon"
        },
        {
            url: "/favicon/android-chrome-192x192.png",
            type: "image/png",
            rel: "icon",
            sizes: "192x192"
        },
        {
            url: "/favicon/android-chrome-512x512.png",
            type: "image/png",
            rel: "icon",
            sizes: "512x512"
        },
        {
            url: "/favicon/mstile-70x70.png",
            type: "image/png",
            rel: "icon",
            sizes: "70x70"
        },
        {
            url: "/favicon/mstile-144x144.png",
            type: "image/png",
            rel: "icon",
            sizes: "144x144"
        },
        {
            url: "/favicon/mstile-150x150.png",
            type: "image/png",
            rel: "icon",
            sizes: "150x150"
        },
        {
            url: "/favicon/mstile-310x150.png",
            type: "image/png",
            rel: "icon",
            sizes: "310x150"
        },
        {
            url: "/favicon/mstile-310x310.png",
            type: "image/png",
            rel: "icon",
            sizes: "310x310"
        },
        {
            url: "/favicon/safari-pinned-tab.svg",
            type: "image/svg+xml",
            rel: "mask-icon"
        }
    ],
    title: "Главная"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <script
                    src="https://telegram.org/js/telegram-web-app.js"
                    async
                ></script>
            </head>

            <body>{children}</body>
        </html>
    )
}
