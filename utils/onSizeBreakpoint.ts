export const onSizeBreakpoint = () => {
    if (typeof window !== "undefined") {
        const width = window.innerWidth

        if (width < 768) {
            return "360"
        }

        if (width <= 1023 && width >= 768) {
            return "768"
        }
    }
    return "1440"
}
