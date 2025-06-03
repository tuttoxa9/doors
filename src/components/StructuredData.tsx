export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MAESTRO",
    "alternateName": "Maestro Works",
    "description": "Изготовление качественных шкафов на заказ в Минске. Шкафы, гардеробные, детская мебель по индивидуальным размерам.",
    "url": "https://maestroworks.ru",
    "telephone": "+375291234567",
    "email": "info@maestroworks.ru",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Примерная, 123",
      "addressLocality": "Минск",
      "addressRegion": "Минская область",
      "postalCode": "220000",
      "addressCountry": "BY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.9045,
      "longitude": 27.5615
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 53.9045,
        "longitude": 27.5615
      },
      "geoRadius": "50000"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Минск"
      },
      {
        "@type": "State",
        "name": "Минская область"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "BYN",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Мебель на заказ",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Шкафы на заказ",
            "description": "Изготовление шкафов по индивидуальным размерам"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Детские шкафы",
            "description": "Безопасная мебель для детских комнат"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Гардеробные комнаты",
            "description": "Проектирование и изготовление гардеробных комнат"
          }
        }
      ]
    },
    "logo": "https://maestroworks.ru/favicon.svg",
    "image": "https://maestroworks.ru/showroom.webp",
    "sameAs": [
      "https://www.instagram.com/maestro_furniture",
      "https://vk.com/maestro_furniture",
      "https://t.me/maestro_furniture"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MAESTRO",
    "url": "https://maestroworks.ru",
    "description": "Официальный сайт компании MAESTRO - изготовление мебели на заказ в Минске",
    "publisher": {
      "@type": "Organization",
      "name": "MAESTRO"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://maestroworks.ru/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://maestroworks.ru"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Каталог",
        "item": "https://maestroworks.ru#shop"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />
    </>
  );
}
