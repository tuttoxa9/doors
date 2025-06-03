'use client'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8 text-center font-pusia-bold">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-lg max-w-none text-zinc-700 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              1. Общие положения
            </h2>
            <p className="leading-relaxed">
              Настоящая Политика конфиденциальности (далее — «Политика») регулирует порядок обработки
              персональных данных пользователей сайта компании «MAESTRO» (далее — «Компания»),
              осуществляющей деятельность по изготовлению мебели на заказ на территории Республики Беларусь.
            </p>
            <p className="leading-relaxed mt-4">
              Используя данный сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              2. Контактная информация
            </h2>
            <div className="bg-zinc-50 p-6 rounded-lg">
              <p><strong>Адрес:</strong> г. Минск, ул. Судмалиса, 13</p>
              <p><strong>Телефон:</strong> +375291565232</p>
              <p><strong>Email:</strong> mebelkdomy.by@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              3. Какие данные мы собираем
            </h2>
            <p className="leading-relaxed mb-4">
              При использовании нашего сайта мы можем собирать следующую информацию:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Имя (при заполнении форм обратной связи)</li>
              <li>Номер телефона (для связи с вами)</li>
              <li>Комментарии и пожелания (по желанию)</li>
              <li>Техническая информация (IP-адрес, тип браузера, время посещения)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              4. Цели обработки персональных данных
            </h2>
            <p className="leading-relaxed mb-4">
              Мы используем ваши персональные данные для:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Связи с вами для предоставления консультаций</li>
              <li>Обработки заказов на изготовление мебели</li>
              <li>Предоставления информации о наших услугах</li>
              <li>Улучшения качества обслуживания</li>
              <li>Выполнения договорных обязательств</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              5. Правовые основания обработки
            </h2>
            <p className="leading-relaxed">
              Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Согласия субъекта персональных данных</li>
              <li>Исполнения договора, стороной которого является субъект персональных данных</li>
              <li>Законных интересов оператора персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              6. Передача данных третьим лицам
            </h2>
            <p className="leading-relaxed">
              Мы не передаем ваши персональные данные третьим лицам без вашего согласия,
              за исключением случаев, предусмотренных законодательством Республики Беларусь.
            </p>
            <p className="leading-relaxed mt-4">
              Мы можем использовать сервисы аналитики (например, Google Analytics) для улучшения
              работы сайта. Эти сервисы могут собирать анонимную статистическую информацию.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              7. Хранение персональных данных
            </h2>
            <p className="leading-relaxed">
              Персональные данные хранятся не дольше, чем это необходимо для достижения
              целей их обработки, но не более 3 лет с момента последнего обращения,
              если иное не предусмотрено законодательством.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              8. Ваши права
            </h2>
            <p className="leading-relaxed mb-4">
              В соответствии с законодательством Республики Беларусь вы имеете право:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Получать информацию о обработке ваших персональных данных</li>
              <li>Требовать уточнения, изменения или удаления ваших данных</li>
              <li>Отзывать согласие на обработку персональных данных</li>
              <li>Обращаться с жалобами в уполномоченные органы</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              9. Безопасность данных
            </h2>
            <p className="leading-relaxed">
              Мы принимаем необходимые технические и организационные меры для защиты
              ваших персональных данных от несанкционированного доступа, изменения,
              раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              10. Cookies (файлы cookie)
            </h2>
            <p className="leading-relaxed">
              Наш сайт использует файлы cookie для улучшения пользовательского опыта
              и аналитики. Вы можете настроить свой браузер для отклонения файлов cookie,
              однако это может повлиять на функциональность сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              11. Изменения в Политике
            </h2>
            <p className="leading-relaxed">
              Мы оставляем за собой право вносить изменения в настоящую Политику.
              Актуальная версия всегда доступна на данной странице. Существенные
              изменения будут доведены до вашего сведения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4 font-pusia-bold">
              12. Контакты для обращений
            </h2>
            <div className="bg-zinc-50 p-6 rounded-lg">
              <p className="leading-relaxed mb-4">
                По всем вопросам, связанным с обработкой персональных данных,
                вы можете обратиться к нам:
              </p>
              <p><strong>Email:</strong> mebelkdomy.by@gmail.com</p>
              <p><strong>Телефон:</strong> +375291565232</p>
              <p><strong>Адрес:</strong> г. Минск, ул. Судмалиса, 13</p>
            </div>
          </section>

          <div className="border-t border-zinc-200 pt-8 mt-12 text-center">
            <p className="text-sm text-zinc-500">
              Дата последнего обновления: 3 июня 2025 года
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
