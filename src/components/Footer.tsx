'use client'

export default function Footer() {
  return (
    <footer className="bg-zinc-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold text-zinc-900 font-pusia-bold">MAESTRO</span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-zinc-600 font-pusia-bold">
              © 2024 Maestro. Все права защищены.
            </p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200 font-pusia-bold">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
