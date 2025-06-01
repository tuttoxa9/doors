'use client'

import { useState, useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  className?: string
}

const videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4'
]

export default function VideoBackground({ className = '' }: VideoBackgroundProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [nextVideoIndex, setNextVideoIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const currentVideoRef = useRef<HTMLVideoElement>(null)
  const nextVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentVideoIndex(nextVideoIndex)
        setNextVideoIndex((nextVideoIndex + 1) % videos.length)
        setIsTransitioning(false)
      }, 1000) // Плавный переход за 1 секунду
    }, 5000) // Смена каждые 5 секунд

    return () => clearInterval(interval)
  }, [nextVideoIndex])

  // Обработка смены текущего видео - ОБЯЗАТЕЛЬНО начинаем с начала
  useEffect(() => {
    if (currentVideoRef.current) {
      const video = currentVideoRef.current

      // Плавно сбрасываем время и начинаем воспроизведение
      const resetAndPlay = async () => {
        try {
          // Pause first to avoid glitches
          video.pause()
          // Reset to beginning
          video.currentTime = 0
          // Wait a bit for smooth transition
          await new Promise(resolve => setTimeout(resolve, 50))
          // Start playing
          await video.play()
        } catch (e) {
          console.log('Autoplay prevented for current video:', e)
        }
      }

      resetAndPlay()
    }
  }, [currentVideoIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  // Обработка подготовки следующего видео - ОБЯЗАТЕЛЬНО начинаем с начала
  useEffect(() => {
    if (nextVideoRef.current) {
      const video = nextVideoRef.current

      // Плавно подготавливаем следующее видео
      const prepareNextVideo = async () => {
        try {
          // Pause and reset
          video.pause()
          video.currentTime = 0
          // Preload for smooth transition
          await new Promise(resolve => setTimeout(resolve, 100))
          await video.play()
        } catch (e) {
          console.log('Autoplay prevented for next video:', e)
        }
      }

      prepareNextVideo()
    }
  }, [nextVideoIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Текущее видео */}
      <video
        ref={currentVideoRef}
        key={`current-${currentVideoIndex}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>

      {/* Следующее видео (для плавного перехода) */}
      <video
        ref={nextVideoRef}
        key={`next-${nextVideoIndex}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videos[nextVideoIndex]} type="video/mp4" />
      </video>


    </div>
  )
}
