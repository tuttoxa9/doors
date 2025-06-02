import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://maestroworks.ru';
  const lastBuildDate = new Date().toUTCString();

  const rssItems = [
    {
      title: 'Встроенные шкафы на заказ в Минске',
      description: 'Изготавливаем качественные встроенные шкафы по индивидуальным размерам. Гарантия 5 лет, бесплатная консультация и 3D-визуализация.',
      link: `${baseUrl}#shop`,
      pubDate: new Date('2024-12-01').toUTCString(),
      guid: `${baseUrl}/services/built-in-wardrobes`,
    },
    {
      title: 'Детские шкафы - безопасная мебель для детских комнат',
      description: 'Специально разработанные детские шкафы с безопасными материалами и фурнитурой. Яркие цвета и функциональный дизайн.',
      link: `${baseUrl}#shop`,
      pubDate: new Date('2024-11-25').toUTCString(),
      guid: `${baseUrl}/services/children-wardrobes`,
    },
    {
      title: 'Гардеробные комнаты на заказ',
      description: 'Проектируем и изготавливаем гардеробные комнаты любой сложности. Максимальное использование пространства и удобство хранения.',
      link: `${baseUrl}#shop`,
      pubDate: new Date('2024-11-20').toUTCString(),
      guid: `${baseUrl}/services/wardrobes`,
    },
    {
      title: 'Мебель на заказ в Минске - индивидуальный подход',
      description: 'Изготавливаем мебель любой сложности по индивидуальным проектам. Высокое качество материалов и профессиональный монтаж.',
      link: `${baseUrl}`,
      pubDate: new Date('2024-11-15').toUTCString(),
      guid: `${baseUrl}/services/custom-furniture`,
    },
    {
      title: 'Акция: Бесплатная 3D-визуализация проекта',
      description: 'При заказе мебели на сумму от 1000 BYN получите бесплатную 3D-визуализацию вашего проекта. Увидьте результат до начала производства!',
      link: `${baseUrl}`,
      pubDate: new Date('2024-11-10').toUTCString(),
      guid: `${baseUrl}/promotions/free-3d-visualization`,
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
