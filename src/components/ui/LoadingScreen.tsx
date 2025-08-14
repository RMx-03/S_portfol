"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(() => {
        onLoadingComplete()
      }, 500) // Brief delay for smooth transition
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-64 h-64">
        <DotLottieReact
          src="https://lottie.host/e5df4c71-0c20-45e4-88c5-8518dd5aab47/XUvlpCYjuL.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  )
}
