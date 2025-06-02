```tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type ActiveSection = 'main' | 'shop'

interface HeaderProps {
  scrollY: number
  activeSection: ActiveSection
  setActiveSection: (section: ActiveSection) => void
  onContactClick?: () => void
}

export default function Header({ scrollY, activeSection, setActiveSection, onContactClick }: HeaderProps) {
  const isScrolled = scrollY > 50

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "glass-effect rounded-b-2xl rounded-t-2xl mx-6 mt-4 shadow-xl"
          : "bg-white/50 backdrop-blur-xl border border-white/30"
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
            <span className="text-2xl font-bold text-zinc-900 tracking-wide font-pusia-bold">
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
                  ? "text-zinc-900 font-semibold bg-white"
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              )}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('shop')}
              className={cn(
                "text-lg font-medium transition-colors duration-200",
                activeSection === 'shop'
                  ? "text-zinc-900 font-semibold bg-white"
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              )}
            >
              Магазин
            </button>
          </div>

          {/* Desktop Contact Button */}
          <motion.button
            onClick={onContactClick}
            className="hidden md:block bg-zinc-900 text-white px-6 py-2 rounded-full font-medium hover:bg-zinc-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Связаться
          </motion.button>

          {/* Mobile Navigation Button */}
          <button
            className={
              activeSection === 'main'
                ? 'md:hidden bg-white text-zinc-900 px-4 py-2 rounded-full font-medium hover:bg-zinc-100 transition-colors duration-200'
                : 'md:hidden bg-zinc-900 text-white px-4 py-2 rounded-full font-medium hover:bg-zinc-800 transition-colors duration-200'
            }
            onClick={() => setActiveSection(activeSection === 'main' ? 'shop' : 'main')}
          >
            {activeSection === 'main' ? 'Магазин' : 'Главная'}
          </button>
        </nav>
      </div>
    </motion.header>
  )
}
```
