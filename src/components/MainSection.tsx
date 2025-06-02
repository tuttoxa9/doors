'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, ArrowRight, Phone, Mail, MapPin, Check } from 'lucide-react'
import VideoBackground from './VideoBackground'

interface MainSectionProps {
  showContactForm?: boolean
  setShowContactForm?: (show: boolean) => void
}

export default function MainSection({ showContactForm = false, setShowContactForm }: MainSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+375',
    comment: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    setShowContactForm?.(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === 'phone') {
      // Ensure phone starts with +375 and only allow 9 digits after
      if (value.startsWith('+375')) {
        const digits = value.slice(4).replace(/\D/g, '')
        if (digits.length <= 9) {
          setFormData({
            ...formData,
            phone: `+375${digits}`
          })
        }
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const isPhoneValid = formData.phone.length === 13 // +375 + 9 digits

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <VideoBackground />

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Заголовок с блюром */}
          <div className="flex justify-center mb-6">
            <div className="relative inline-block">
              {/* Блюр за заголовком - подстраивается под размер текста */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 backdrop-blur-lg bg-black/30 rounded-2xl transform scale-110" />
              </div>
              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight relative z-10 px-6 py-3"
              >
                Пространство. Стиль. Качество.
              </h1>
            </div>
          </div>

          {/* Подзаголовок с компактным блюром */}
          <div className="flex justify-center mb-8">
            <div className="relative inline-block">
              {/* Компактный блюр за подзаголовком - подстраивается под размер текста */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 backdrop-blur-md bg-black/25 rounded-xl transform scale-105" />
              </div>
              <p
                className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed px-6 py-3 relative z-10"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                Создаем уникальные решения для хранения, которые идеально впишутся в ваш интерьер
              </p>
            </div>
          </div>

          {/* Кнопка по центру */}
          <div className="flex justify-center">
            <motion.button
              onClick={() => setShowContactForm?.(true)}
              className="bg-zinc-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-zinc-800 transition-colors duration-200 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Заказать консультацию</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Process & Form Section */}
      <section className="bg-zinc-50 rounded-b-3xl py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Process Description */}
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-8 font-durik">
                Наш процесс работы
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2 font-durik">Консультация</h3>
                    <p className="text-zinc-600 font-durik">Обсуждаем ваши потребности, измеряем пространство и предлагаем оптимальные решения</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2 font-durik">Дизайн</h3>
                    <p className="text-zinc-600 font-durik">Создаем 3D-визуализацию будущего шкафа с учетом всех ваших пожеланий</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2 font-durik">Производство</h3>
                    <p className="text-zinc-600 font-durik">Изготавливаем мебель из качественных материалов на современном оборудовании</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2 font-durik">Установка</h3>
                    <p className="text-zinc-600 font-durik">Доставляем и устанавливаем шкаф в вашем доме с гарантией качества</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-zinc-900 mb-6 font-durik">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2 font-durik">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2 font-durik">
                    Телефон
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                    {isPhoneValid && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-zinc-700 mb-2 font-durik">
                    Комментарий
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Расскажите о ваших пожеланиях..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors duration-200 font-durik"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Отправить заявку
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-zinc-900 text-center mb-16 font-pusia-bold"
          >
            Отзывы наших клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Мария Петрова",
                review: "Заказывали шкаф-купе в спальню. Качество превзошло все ожидания! Очень довольны результатом.",
                rating: 5
              },
              {
                name: "Алексей Смирнов",
                review: "Профессиональный подход, точные сроки, отличное качество. Рекомендую всем!",
                rating: 5
              },
              {
                name: "Екатерина Иванова",
                review: "Сделали встроенный шкаф в прихожую. Идеально вписался в интерьер. Спасибо команде!",
                rating: 5
              }
            ].map((review, index) => (
              <div
                key={review.name}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={`star-${review.name}-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-600 mb-4 italic font-pusia-bold">"{review.review}"</p>
                <p className="font-semibold text-zinc-900 font-pusia-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-16 font-pusia-bold"
          >
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="flex flex-col items-center"
            >
              <Phone className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-pusia-bold">Телефон</h3>
              <p className="text-zinc-300 font-pusia-bold">+7 (999) 123-45-67</p>
            </div>
            <div
              className="flex flex-col items-center"
            >
              <Mail className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-pusia-bold">Email</h3>
              <p className="text-zinc-300 font-pusia-bold">info@maestro-furniture.ru</p>
            </div>
            <div
              className="flex flex-col items-center"
            >
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-pusia-bold">Адрес</h3>
              <p className="text-zinc-300 font-pusia-bold">г. Москва, ул. Мебельная, 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-zinc-900 font-durik">Заказать консультацию</h3>
              <button
                onClick={() => setShowContactForm?.(false)}
                className="text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-zinc-700 mb-2 font-durik">
                  Имя
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-zinc-700 mb-2 font-durik">
                  Телефон
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                  {isPhoneValid && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="modal-comment" className="block text-sm font-medium text-zinc-700 mb-2 font-durik">
                  Комментарий
                </label>
                <textarea
                  id="modal-comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Расскажите о ваших пожеланиях..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors duration-200 font-durik"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Отправить заявку
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
