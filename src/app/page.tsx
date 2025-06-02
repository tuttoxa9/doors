'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import MainSection from '@/components/MainSection'
import ShopSection from '@/components/ShopSection'
import Footer from '@/components/Footer'

type ActiveSection = 'main' | 'shop'

export default function Home() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('main')
  const [scrollY, setScrollY] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sectionVariants = {
    enter: {
      x: '100%',
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: '-100%',
      opacity: 0,
    },
  }

  const transition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5,
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        scrollY={scrollY}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onContactClick={() => setShowContactForm(true)}
      />

      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeSection === 'main' ? (
            <motion.div
              key="main"
              variants={sectionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
            >
              <MainSection
                showContactForm={showContactForm}
                setShowContactForm={setShowContactForm}
              />
            </motion.div>
          ) : (
            <motion.div
              key="shop"
              variants={sectionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
            >
              <ShopSection onContactClick={() => setShowContactForm(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
