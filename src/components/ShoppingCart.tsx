'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag, Trash2, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/hooks/useCart'
import OptimizedImage from './OptimizedImage'

interface OrderData {
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
}

interface ShoppingCartProps {
  onOrderSubmit?: (orderData: OrderData) => void
}

export default function ShoppingCart({ onOrderSubmit }: ShoppingCartProps) {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice, isCartOpen, setIsCartOpen } = useCart()
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [orderData, setOrderData] = useState({
    phone: '',
    name: '',
    address: '',
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} BYN`
  }

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!orderData.phone.trim()) return

    setIsSubmitting(true)

    try {
      const order = {
        ...orderData,
        items: items.map(item => ({
          product: item.product,
          selectedColor: item.selectedColor,
          quantity: item.quantity,
          price: item.product.price.min
        })),
        totalItems: getTotalItems(),
        totalPrice: getTotalPrice(),
        timestamp: new Date().toISOString()
      }

      if (onOrderSubmit) {
        await onOrderSubmit(order)
      }

      // Clear cart and close modal
      clearCart()
      setShowOrderForm(false)
      setIsCartOpen(false)
      setOrderData({ phone: '', name: '', address: '', comment: '' })
    } catch (error) {
      console.error('Ошибка отправки заказа:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setOrderData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-zinc-100 rounded-xl">
                  <ShoppingBag className="w-6 h-6 text-zinc-900" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-zinc-900">Корзина</h2>
                  <p className="text-sm text-zinc-500">{getTotalItems()} товаров</p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-zinc-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto max-h-96">
              {items.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-8 h-8 text-zinc-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Корзина пуста</h3>
                  <p className="text-zinc-500">Добавьте товары из каталога</p>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedColor || 'default'}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center space-x-4 p-4 bg-zinc-50 rounded-2xl"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        {item.product.images && item.product.images.length > 0 ? (
                          <OptimizedImage
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                            fallbackClassName="w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
                            <ShoppingBag className="w-6 h-6 text-zinc-400" />
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-zinc-900 truncate">{item.product.name}</h3>
                        <p className="text-sm text-zinc-500">{item.product.category}</p>
                        {item.selectedColor && (
                          <p className="text-xs text-zinc-400">Цвет: {item.selectedColor}</p>
                        )}
                        <p className="text-sm font-medium text-zinc-900 mt-1">
                          {formatPrice(item.product.price.min)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-white rounded-lg transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4 text-zinc-600" />
                        </button>
                        <span className="w-8 text-center font-medium text-zinc-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-white rounded-lg transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4 text-zinc-600" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200 text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && !showOrderForm && (
              <div className="p-6 border-t border-zinc-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-zinc-900">Итого:</span>
                  <span className="text-xl font-bold text-zinc-900">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowOrderForm(true)}
                    className="flex-1 bg-zinc-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-zinc-800 transition-colors duration-200"
                  >
                    Оформить заказ
                  </button>
                  <button
                    onClick={clearCart}
                    className="px-6 py-3 border-2 border-zinc-300 text-zinc-700 rounded-xl font-semibold hover:border-zinc-500 transition-colors duration-200"
                  >
                    Очистить
                  </button>
                </div>
              </div>
            )}

            {/* Order Form */}
            {showOrderForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 border-t border-zinc-200 bg-zinc-50"
              >
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">Оформление заказа</h3>
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Номер телефона *
                    </label>
                    <input
                      type="tel"
                      value={orderData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+375 (XX) XXX-XX-XX"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      value={orderData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Адрес доставки
                    </label>
                    <input
                      type="text"
                      value={orderData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Город, улица, дом"
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Комментарий к заказу
                    </label>
                    <textarea
                      value={orderData.comment}
                      onChange={(e) => handleInputChange('comment', e.target.value)}
                      placeholder="Дополнительные пожелания..."
                      rows={3}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || !orderData.phone.trim()}
                      className="flex-1 bg-zinc-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-zinc-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Отправка...</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-4 h-4" />
                          <span>Отправить заказ</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowOrderForm(false)}
                      className="px-6 py-3 border-2 border-zinc-300 text-zinc-700 rounded-xl font-semibold hover:border-zinc-500 transition-colors duration-200"
                    >
                      Назад
                    </button>
                  </div>
                </form>

                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="text-sm text-yellow-800">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Мы свяжемся с вами в течение 30 минут для уточнения деталей заказа
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
