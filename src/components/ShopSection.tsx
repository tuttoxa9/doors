'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Eye, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useProducts } from '@/hooks/useProducts'
import ProductModal from './ProductModal'
import type { Product } from '@/types/product'

interface ShopSectionProps {
  onContactClick?: () => void
}

export default function ShopSection({ onContactClick }: ShopSectionProps) {
  const { products, loading, error } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { name: 'Шкафы-купе', count: products.filter(p => p.category === 'Шкафы-купе').length },
    { name: 'Встроенные шкафы', count: products.filter(p => p.category === 'Встроенные шкафы').length },
    { name: 'Гардеробные', count: products.filter(p => p.category === 'Гардеробные').length },
    { name: 'Детские шкафы', count: products.filter(p => p.category === 'Детские шкафы').length }
  ]

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const formatPrice = (price: { min: number; max: number }) => {
    if (price.min === price.max) {
      return `${price.min.toLocaleString()} BYN`
    }
    return `от ${price.min.toLocaleString()} BYN`
  }

  const displayProducts = products

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/showroom.webp"
            alt="Showroom MAESTRO"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Gradient overlay for smooth transition to white */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/95 via-white/80 via-white/60 via-white/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block backdrop-blur-sm bg-white/20 rounded-2xl px-6 py-4 md:px-8 md:py-6 border border-white/30 shadow-2xl">
            <h1
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight drop-shadow-lg"
            >
              Наши проекты
            </h1>
            <p
              className="text-xl text-white/90 drop-shadow-md"
            >
              Каждый шкаф — это история успеха, воплощенная в дереве и стекле
            </p>
          </div>
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

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-zinc-600" />
              <span className="ml-3 text-zinc-600">Загрузка товаров...</span>
            </div>
          ) : error && products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-600 mb-4">Товары не найдены</p>
              <p className="text-sm text-zinc-500">Пожалуйста, добавьте товары в Firebase Firestore</p>
            </div>
          ) : null}

          {displayProducts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0] || 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop'}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200">
                        <Eye className="w-5 h-5 text-zinc-900" />
                      </button>
                    </div>
                  </div>
                  {product.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                        ⭐ Популярное
                      </span>
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Нет в наличии
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-500 font-medium">{product.category}</span>
                    <span className="text-lg font-bold text-zinc-900">{formatPrice(product.price)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{product.name}</h3>
                  <p className="text-zinc-600 mb-4">{product.description}</p>

                  {product.colors.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.colors.slice(0, 3).map((color) => (
                        <span key={color} className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded">
                          {color}
                        </span>
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-zinc-500">+{product.colors.length - 3}</span>
                      )}
                    </div>
                  )}

                  <button className="flex items-center space-x-2 text-zinc-900 font-medium hover:text-zinc-700 transition-colors duration-200">
                    <span>Подробнее</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProduct(null)
        }}
        onContactClick={onContactClick}
      />

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
            onClick={onContactClick}
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
