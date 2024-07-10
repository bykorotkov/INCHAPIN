import { useEffect, useState } from "react"

interface WebApp {
    MainButton: {
        isVisible: boolean
        hide: () => void
        show: () => void
    }
    close: () => void
    initDataUnsafe: {
        user: any
        query_id: string
    }
}

export function useTelegram() {
    const [webApp, setWebApp] = useState<WebApp | null>(null)

    useEffect(() => {
        const app = (window as any).Telegram?.WebApp
        if (app) {
            app.ready()
            setWebApp(app)
        }
    }, [])

    const onClose = () => {
        if (webApp) {
            webApp.close()
        }
    }

    const onToggleButton = () => {
        if (webApp && webApp.MainButton) {
            if (webApp.MainButton.isVisible) {
                webApp.MainButton.hide()
            } else {
                webApp.MainButton.show()
            }
        }
    }

    return {
        onClose,
        onToggleButton,
        webApp,
        user: webApp?.initDataUnsafe?.user,
        queryId: webApp?.initDataUnsafe?.query_id
    }
}
