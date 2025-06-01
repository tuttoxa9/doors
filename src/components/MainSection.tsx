'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import VideoBackground from './VideoBackground'

export default function MainSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <VideoBackground />

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Заголовок с блюром */}
          <div className="relative mb-6 inline-block">
            {/* Блюр за заголовком - подстраивается под размер текста */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 backdrop-blur-lg bg-black/30 rounded-2xl transform scale-110" />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight relative z-10 px-6 py-3"
            >
              Пространство. Стиль. Качество.
            </motion.h1>
          </div>

          {/* Подзаголовок с блюром */}
          <div className="relative mb-8">
            {/* Блюр за подзаголовком */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute -inset-2 backdrop-blur-md bg-black/25 rounded-xl" />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed px-4 relative z-10"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Создаем уникальные решения для хранения, которые идеально впишутся в ваш интерьер
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-zinc-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-zinc-800 transition-colors duration-200 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Заказать консультацию</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Process & Form Section */}
      <section className="bg-zinc-50 rounded-b-3xl py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Process Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="+7 (999) 999-99-99"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2 font-durik">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-zinc-900 text-center mb-16 font-pusia-bold"
          >
            Отзывы наших клиентов
          </motion.h2>
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
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={`star-${review.name}-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-600 mb-4 italic font-pusia-bold">"{review.review}"</p>
                <p className="font-semibold text-zinc-900 font-pusia-bold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 font-pusia-bold"
          >
            Свяжитесь с нами
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <Phone className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-pusia-bold">Телефон</h3>
              <p className="text-zinc-300 font-pusia-bold">+7 (999) 123-45-67</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <Mail className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-pusia-bold">Email</h3>
              <p className="text-zinc-300 font-pusia-bold">info@maestro-furniture.ru</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-pusia-bold">Адрес</h3>
              <p className="text-zinc-300 font-pusia-bold">г. Москва, ул. Мебельная, 123</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
