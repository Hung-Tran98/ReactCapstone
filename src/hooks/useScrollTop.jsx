
import { useEffect } from "react"
export const useScrollTop = () => {
    useEffect(() => {
        document.documentElement.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, location.href)
}