import { useEffect, useState } from 'react'

export const useMediaQuery = (params) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])
  
  return isMobile
}