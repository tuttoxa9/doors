'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import MainSection from '@/components/MainSection'
import ShopSection from '@/components/ShopSection'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ShoppingCart from '@/components/ShoppingCart'

type ActiveSection = 'main' | 'shop'

export default function Home() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('main')
  const [scrollY, setScrollY] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)

  const handleOrderSubmit = async (orderData: {
    phone: string
    name?: string
    address?: string
    comment?: string
    items: Array<{
      product: {
        id: string
        name: string
        category: string
        price: { min: number; max: number }
      }
      selectedColor?: string
      quantity: number
      price: number
    }>
    totalItems: number
    totalPrice: number
    timestamp: string
  }) => {
    try {
      const response = await fetch('/.netlify/functions/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      })

      if (!response.ok) {
        throw new Error('Failed to submit order')
      }

      const result = await response.json()
      console.log('Order submitted successfully:', result)

      // You can add a success toast here
      alert('Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.')
    } catch (error) {
      console.error('Error submitting order:', error)
      alert('Произошла ошибка при отправке заказа. Попробуйте позже.')
    }
  }

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

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
      />

      {/* Shopping Cart */}
      <ShoppingCart onOrderSubmit={handleOrderSubmit} />
    </div>
  )
}
