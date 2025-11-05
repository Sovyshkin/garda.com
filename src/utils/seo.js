// SEO утилиты для динамического управления мета-тегами
export const updateMetaTags = (metaData) => {
  // Обновляем title
  if (metaData.title) {
    document.title = metaData.title;
  }

  // Обновляем description
  updateMetaTag('description', metaData.description);
  
  // Обновляем keywords
  updateMetaTag('keywords', metaData.keywords);
  
  // Обновляем canonical URL
  updateLinkTag('canonical', metaData.canonical);
  
  // Обновляем Open Graph теги
  if (metaData.og) {
    updateMetaProperty('og:title', metaData.og.title || metaData.title);
    updateMetaProperty('og:description', metaData.og.description || metaData.description);
    updateMetaProperty('og:image', metaData.og.image);
    updateMetaProperty('og:url', metaData.og.url || metaData.canonical);
    updateMetaProperty('og:type', metaData.og.type || 'website');
  }
  
  // Обновляем Twitter Card теги
  if (metaData.twitter) {
    updateMetaTag('twitter:title', metaData.twitter.title || metaData.title);
    updateMetaTag('twitter:description', metaData.twitter.description || metaData.description);
    updateMetaTag('twitter:image', metaData.twitter.image);
  }
};

const updateMetaTag = (name, content) => {
  if (!content) return;
  
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateMetaProperty = (property, content) => {
  if (!content) return;
  
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateLinkTag = (rel, href) => {
  if (!href) return;
  
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

// Предустановленные мета-данные для разных страниц
export const pageMetaData = {
  home: {
    title: 'Garda Wallet - Безопасный криптокошелёк для оплаты USDT через QR-код',
    description: 'Garda Wallet - современный криптокошелёк для безопасной оплаты покупок через USDT. Оплачивайте товары и услуги криптовалютой по QR-коду быстро и надёжно.',
    keywords: 'криптокошелёк, USDT кошелёк, оплата криптовалютой, QR код, Garda Wallet, криптоплатежи, блокчейн платежи, TRC-20',
    canonical: 'https://gardawallet.com/',
    og: {
      title: 'Garda Wallet - Безопасный криптокошелёк для оплаты USDT',
      description: 'Современный криптокошелёк для оплаты покупок через USDT. Быстрые и безопасные платежи по QR-коду без банков и посредников.',
      image: 'https://gardawallet.com/assets/block_1.png',
      url: 'https://gardawallet.com/',
      type: 'website'
    },
    twitter: {
      title: 'Garda Wallet - Безопасный криптокошелёк для оплаты USDT',
      description: 'Современный криптокошелёк для оплаты покупок через USDT. Быстрые и безопасные платежи по QR-коду.',
      image: 'https://gardawallet.com/assets/block_1.png'
    }
  },
  
  aml: {
    title: 'AML политика - Garda Wallet | Противодействие отмыванию денег',
    description: 'Политика противодействия отмыванию денег (AML) компании Garda Wallet LLC. Процедуры KYC, мониторинг транзакций и обеспечение безопасности.',
    keywords: 'AML политика, KYC процедуры, противодействие отмыванию денег, Garda Wallet, финансовая безопасность',
    canonical: 'https://gardawallet.com/documents/aml',
    og: {
      title: 'AML политика - Garda Wallet',
      description: 'Политика противодействия отмыванию денег компании Garda Wallet LLC',
      image: 'https://gardawallet.com/assets/block_4.png',
      url: 'https://gardawallet.com/documents/aml'
    }
  },
  
  terms: {
    title: 'Пользовательское соглашение - Garda Wallet | Условия использования',
    description: 'Пользовательское соглашение и условия использования криптокошелька Garda Wallet. Права и обязанности пользователей, правила работы с платформой.',
    keywords: 'пользовательское соглашение, условия использования, Garda Wallet, правила платформы',
    canonical: 'https://gardawallet.com/documents/terms_of_use',
    og: {
      title: 'Пользовательское соглашение - Garda Wallet',
      description: 'Условия использования криптокошелька Garda Wallet',
      image: 'https://gardawallet.com/assets/block_4.png',
      url: 'https://gardawallet.com/documents/terms_of_use'
    }
  },
  
  privacy: {
    title: 'Политика конфиденциальности - Garda Wallet | Защита персональных данных',
    description: 'Политика конфиденциальности Garda Wallet. Принципы обработки и защиты персональных данных пользователей криптокошелька.',
    keywords: 'политика конфиденциальности, защита данных, персональные данные, Garda Wallet, приватность',
    canonical: 'https://gardawallet.com/documents/privacy_policy',
    og: {
      title: 'Политика конфиденциальности - Garda Wallet',
      description: 'Принципы защиты персональных данных пользователей Garda Wallet',
      image: 'https://gardawallet.com/assets/block_4.png',
      url: 'https://gardawallet.com/documents/privacy_policy'
    }
  },
  
  cookie: {
    title: 'Политика использования Cookie - Garda Wallet | Файлы cookies',
    description: 'Политика использования файлов cookie на сайте Garda Wallet. Информация о типах cookies и их назначении.',
    keywords: 'политика cookie, файлы cookies, Garda Wallet, веб-аналитика',
    canonical: 'https://gardawallet.com/documents/cookie',
    og: {
      title: 'Политика Cookie - Garda Wallet',
      description: 'Информация об использовании файлов cookie на сайте Garda Wallet',
      image: 'https://gardawallet.com/assets/block_4.png',
      url: 'https://gardawallet.com/documents/cookie'
    }
  }
};

// Функция для получения мета-данных статьи
export const getArticleMetaData = (article) => {
  if (!article) return pageMetaData.home;
  
  const articleUrl = `https://gardawallet.com/article/${article.date.replace(/\//g, '-')}`;
  const shortDescription = article.content
    .replace(/<[^>]*>/g, '')
    .trim()
    .substring(0, 160) + (article.content.length > 160 ? '...' : '');
  
  return {
    title: `${article.title} | Garda Wallet Blog`,
    description: shortDescription,
    keywords: `${article.title}, Garda Wallet, криптовалюта, USDT, блокчейн, финтех`,
    canonical: articleUrl,
    og: {
      title: article.title,
      description: shortDescription,
      image: `https://gardawallet.com/assets/${article.image}.png`,
      url: articleUrl,
      type: 'article'
    },
    twitter: {
      title: article.title,
      description: shortDescription,
      image: `https://gardawallet.com/assets/${article.image}.png`
    }
  };
};