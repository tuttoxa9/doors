'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Eye } from 'lucide-react'

export default function ShopSection() {
  const categories = [
    { name: 'Шкафы-купе', count: 24 },
    { name: 'Встроенные шкафы', count: 18 },
    { name: 'Гардеробные', count: 12 },
    { name: 'Детские шкафы', count: 8 }
  ]

  const projects = [
    {
      id: 1,
      title: 'Современный шкаф-купе',
      category: 'Шкафы-купе',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop',
      price: 'от 2 125 BYN',
      description: 'Минималистичный дизайн с зеркальными дверцами'
    },
    {
      id: 2,
      title: 'Встроенная гардеробная',
      category: 'Гардеробные',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop',
      price: 'от 3 000 BYN',
      description: 'Полноценная система хранения с освещением'
    },
    {
      id: 3,
      title: 'Шкаф в прихожую',
      category: 'Встроенные шкафы',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      price: 'от 1 625 BYN',
      description: 'Компактное решение для небольших пространств'
    },
    {
      id: 4,
      title: 'Детский шкаф-домик',
      category: 'Детские шкафы',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      price: 'от 1 125 BYN',
      description: 'Яркий и функциональный шкаф для детской комнаты'
    },
    {
      id: 5,
      title: 'Угловой шкаф-купе',
      category: 'Шкафы-купе',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      price: 'от 2 375 BYN',
      description: 'Максимальное использование углового пространства'
    },
    {
      id: 6,
      title: 'Шкаф с подсветкой',
      category: 'Встроенные шкафы',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop',
      price: 'от 2 750 BYN',
      description: 'Элегантное решение с LED-подсветкой'
    }
  ]

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Наши проекты
          </h1>
          <p
            className="text-xl text-zinc-600 mb-12 max-w-3xl mx-auto"
          >
            Каждый шкаф — это история успеха, воплощенная в дереве и стекле
          </p>
        </div>
      </section>

      {/* Showroom Image Section */}
      <section className="relative">
        <div className="w-full h-[60vh] relative overflow-hidden">
          <img
            src="/showroom.webp"
            alt="Showroom MAESTRO"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for smooth transition to white */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="pt-8 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold text-zinc-900 mb-12 text-center"
          >
            Категории
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-zinc-50 p-6 rounded-2xl text-center hover:bg-zinc-100 transition-colors duration-200 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{category.name}</h3>
                <p className="text-zinc-600">{category.count} проектов</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold text-zinc-900 mb-16 text-center"
          >
            Портфолио работ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200">
                        <Eye className="w-5 h-5 text-zinc-900" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-500 font-medium">{project.category}</span>
                    <span className="text-lg font-bold text-zinc-900">{project.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{project.title}</h3>
                  <p className="text-zinc-600 mb-4">{project.description}</p>
                  <button className="flex items-center space-x-2 text-zinc-900 font-medium hover:text-zinc-700 transition-colors duration-200">
                    <span>Подробнее</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold text-zinc-900 mb-16 text-center"
          >
            Популярные решения
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Шкафы-купе на заказ</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Наши шкафы-купе идеально впишутся в любой интерьер. Мы предлагаем широкий выбор
                материалов, цветов и конфигураций. Каждый шкаф изготавливается с учетом особенностей
                вашего помещения и личных предпочтений.
              </p>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-zinc-900 rounded-full" />
                  <span>Индивидуальные размеры</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-zinc-900 rounded-full" />
                  <span>Качественная фурнитура</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-zinc-900 rounded-full" />
                  <span>Гарантия 5 лет</span>
                </li>
              </ul>
            </div>
            <div
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop"
                alt="Шкаф-купе"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-6"
          >
            Готовы создать шкаф мечты?
          </h2>
          <p
            className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto"
          >
            Свяжитесь с нами для бесплатной консультации и 3D-визуализации вашего будущего шкафа
          </p>
          <motion.button
            className="bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-100 transition-colors duration-200 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Получить консультацию</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  )
}
