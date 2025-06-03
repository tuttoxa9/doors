'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Сколько стоит изготовление шкафа на заказ в Минске?",
    answer: "Стоимость шкафа на заказ в Минске начинается от 290 BYN и зависит от размеров, материалов и сложности конструкции. Предоставляем бесплатный расчет стоимости после замера."
  },
  {
    question: "Какие гарантии предоставляет MAESTRO?",
    answer: "Мы предоставляем гарантию 5 лет на всю изготовленную мебель. Гарантия покрывает качество материалов и сборки."
  },
  {
    question: "Как долго изготавливается шкаф на заказ?",
    answer: "Срок изготовления шкафа составляет от 7 до 21 дня в зависимости от сложности проекта. Точные сроки обговариваются при заключении договора."
  },
  {
    question: "Предоставляете ли вы бесплатный замер?",
    answer: "Да, мы предоставляем бесплатный выезд мастера для замера и консультации по всему Минску и Минской области."
  },
  {
    question: "Какие материалы вы используете для изготовления мебели?",
    answer: "Мы используем только качественные материалы: ЛДСП, МДФ, натуральное дерево, зеркала, стекло. Вся фурнитура от проверенных европейских производителей."
  },
  {
    question: "Можно ли заказать 3D-визуализацию проекта?",
    answer: "Да, мы предоставляем бесплатную 3D-визуализацию вашего будущего шкафа, чтобы вы могли увидеть результат до начала изготовления."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-zinc-900 mb-6"
            style={{ fontFamily: 'Pusia Bold, system-ui, sans-serif' }}
          >
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Ответы на популярные вопросы о заказе мебели в MAESTRO
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-zinc-900 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-6 h-6 text-zinc-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-zinc-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-600 mb-6">
            Не нашли ответ на свой вопрос?
          </p>
          <button
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-800 transition-colors"
            onClick={() => {
              const phone = '+375291565232';
              window.open(`tel:${phone}`, '_self');
            }}
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
}
