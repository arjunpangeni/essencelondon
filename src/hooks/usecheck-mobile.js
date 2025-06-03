"use client"

import { useState, useEffect } from "react"

export function useMobilecheck() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Check if the user is on a mobile device
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera
            const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
            setIsMobile(mobileRegex.test(userAgent))
        }

        checkMobile()

        // Also check on resize in case of device rotation or window resizing
        window.addEventListener("resize", checkMobile)

        return () => {
            window.removeEventListener("resize", checkMobile)
        }
    }, [])

    return isMobile
}
