import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://maestroworks.ru';
  const lastBuildDate = new Date().toUTCString();

  const rssItems = [
    {
      title: 'Новинка: Шкаф-купе трёхдверный с зеркалом',
      description: 'Представляем классический трёхдверный шкаф-купе с зеркальными вставками и австрийской системой направляющих ARISTO. Цена от 1200 BYN.',
      link: `${baseUrl}#shop`,
      pubDate: new Date('2024-12-01').toUTCString(),
      guid: `${baseUrl}/products/wardrobe-three-door-mirror`,
    },
    {
      title: 'Встроенный угловой шкаф - максимум пространства',
      description: 'Угловой встроенный шкаф с индивидуальным проектированием. Оптимальное использование углового пространства. От 1500 BYN.',
      link: `${baseUrl}#shop`,
      pubDate: new Date('2024-11-28').toUTCString(),
      guid: `${baseUrl}/products/corner-built-in-wardrobe`,
    },
    {
      title: 'Детский шкаф "Растём вместе" - безопасность прежде всего',
      description: 'Экологически чистый детский шкаф с регулируемыми полками. Закруглённые углы, доводчики, яркие цвета. От 800 BYN.',
      link: `${baseUrl}#shop`,
      pubDate: new Date('2024-11-25').toUTCString(),
      guid: `${baseUrl}/products/children-grow-together`,
    },
    {
      title: 'Гардеробная система "Лофт" - современный стиль',
      description: 'Стильная гардеробная в стиле лофт с LED-подсветкой и выдвижными корзинами. Металлические элементы, открытые стеллажи. От 2500 BYN.',
      link: `${baseUrl}#shop`,
      pubDate: new Date('2024-11-22').toUTCString(),
      guid: `${baseUrl}/products/loft-wardrobe-system`,
    },
    {
      title: 'Компактный шкаф-купе - решение для малогабаритных квартир',
      description: 'Двухдверный шкаф-купе с немецкой фурнитурой BLUM. Идеально подходит для небольших помещений. От 900 BYN.',
      link: `${baseUrl}#shop`,
      pubDate: new Date('2024-11-20').toUTCString(),
      guid: `${baseUrl}/products/compact-wardrobe`,
    },
    {
      title: 'Встроенный шкаф в нишу - индивидуальные решения',
      description: 'Шкаф для нестандартных ниш и скосов. Бесплатный замер и проектирование. Максимальное использование пространства. От 1100 BYN.',
      link: `${baseUrl}#shop`,
      pubDate: new Date('2024-11-18').toUTCString(),
      guid: `${baseUrl}/products/niche-built-in-wardrobe`,
    },
    {
      title: 'Акция: Скидка 15% на заказы до конца года',
      description: 'При заказе любого шкафа до 31 декабря действует скидка 15%. Также бесплатная 3D-визуализация и доставка по Минску!',
      link: `${baseUrl}`,
      pubDate: new Date('2024-11-15').toUTCString(),
      guid: `${baseUrl}/promotions/year-end-discount`,
    }
  ];

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MAESTRO - Шкафы на заказ в Минске</title>
    <description>Новости и обновления от компании MAESTRO. Изготовление качественной мебели на заказ в Минске. Встроенные шкафы, гардеробные, детская мебель по индивидуальным размерам.</description>
    <link>${baseUrl}</link>
    <language>ru-RU</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    <managingEditor>info@maestroworks.ru (MAESTRO)</managingEditor>
    <webMaster>info@maestroworks.ru (MAESTRO)</webMaster>
    <category>Мебель</category>
    <category>Интерьер</category>
    <category>Дизайн</category>
    <category>Минск</category>
    <ttl>1440</ttl>
    <image>
      <url>${baseUrl}/favicon.svg</url>
      <title>MAESTRO</title>
      <link>${baseUrl}</link>
      <width>32</width>
      <height>32</height>
    </image>
    ${rssItems.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid isPermaLink="false">${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <category>Мебель на заказ</category>
    </item>`).join('')}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
