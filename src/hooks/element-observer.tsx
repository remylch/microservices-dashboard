import React, { useEffect, useState } from "react"

const useIntersection = (
  element: React.RefObject<HTMLDivElement>,
  rootMargin: string
) => {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin }
    )

    if (element.current) {
      observer.observe(element.current)
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current)
      }
    }
  }, [])

  return isVisible
}

export default useIntersection
