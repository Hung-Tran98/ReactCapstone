
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
export const useScrollTop = () => {
    const location = useLocation();
    useEffect(() => {
        document.documentElement.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, location)
}