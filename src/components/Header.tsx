'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type ActiveSection = 'main' | 'shop'

interface HeaderProps {
  scrollY: number
  activeSection: ActiveSection
  setActiveSection: (section: ActiveSection) => void
}

export default function Header({ scrollY, activeSection, setActiveSection }: HeaderProps) {
  const isScrolled = scrollY > 50
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "glass-effect rounded-b-2xl rounded-t-2xl mx-6 mt-4 shadow-xl"
          : "bg-white/90 backdrop-blur-sm"
      )}
      animate={{
        y: isScrolled ? 0 : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 relative">
                <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-sm" />
                <div className="absolute top-0 right-0 w-2 h-6 bg-white rounded-sm" />
                <div className="absolute bottom-0 left-0 w-6 h-2 bg-white rounded-sm" />
              </div>
            </div>
            <span className="text-2xl font-bold text-zinc-900 tracking-wide">
              MAESTRO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setActiveSection('main')}
              className={cn(
                "text-lg font-medium transition-colors duration-200",
                activeSection === 'main'
                  ? "text-zinc-900 font-semibold"
                  : "text-zinc-600 hover:text-zinc-900"
              )}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('shop')}
              className={cn(
                "text-lg font-medium transition-colors duration-200",
                activeSection === 'shop'
                  ? "text-zinc-900 font-semibold"
                  : "text-zinc-600 hover:text-zinc-900"
              )}
            >
              Магазин
            </button>
          </div>

          {/* Desktop Contact Button */}
          <motion.button
            className="hidden md:block bg-zinc-900 text-white px-6 py-2 rounded-full font-medium hover:bg-zinc-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Связаться
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-zinc-900" />
            ) : (
              <Menu className="w-6 h-6 text-zinc-900" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur-lg"
          >
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => {
                  setActiveSection('main')
                  setIsMobileMenuOpen(false)
                }}
                className={cn(
                  "block w-full text-left text-lg font-medium transition-colors duration-200",
                  activeSection === 'main'
                    ? "text-zinc-900 font-semibold"
                    : "text-zinc-600"
                )}
              >
                Главная
              </button>
              <button
                onClick={() => {
                  setActiveSection('shop')
                  setIsMobileMenuOpen(false)
                }}
                className={cn(
                  "block w-full text-left text-lg font-medium transition-colors duration-200",
                  activeSection === 'shop'
                    ? "text-zinc-900 font-semibold"
                    : "text-zinc-600"
                )}
              >
                Магазин
              </button>
              <button
                className="w-full bg-zinc-900 text-white px-6 py-3 rounded-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Связаться
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
