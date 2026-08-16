(function(){
  const defaultLang = 'en';
  const supported = ['en', 'pt'];

  const translations = {
    // Navigation
    'nav.home':        { en: 'Home', pt: 'Início' },
    'nav.women':       { en: 'Women', pt: 'Mulheres' },
    'nav.men':         { en: 'T-shirts/Hoodies', pt: 'T-shirts/Moletons' },
    'nav.men2':        { en: 'Joggers/Shorts', pt: 'Manjucos/Calções' },
    'nav.accessories': { en: 'Accessories', pt: 'Acessórios' },
    'nav.about':       { en: 'About Us', pt: 'Sobre Nós' },

    // Banner
    'banner.lead':     { en: 'Live a life worth waking up for.', pt: 'Construa uma vida que valha a pena acordar de manhã para viver.' },
    'banner.cta':      { en: 'Feel rich!', pt: 'Sinta-se rico!' },

    // Categories
    'cat.hoodies':     { en: 'Hooded T-shirts/Hoodies', pt: 'T-shirts/Moletons com Capuz' },
    'cat.joggers':     { en: 'Joggers/Shorts', pt: 'Manjucos/Calções' },
    'cat.accessories': { en: 'Accessories', pt: 'Acessórios' },
    'accessories.lead':{ en: 'Items that make you feel rich.', pt: 'Itens que te fazem sentir rico.' },
    'brand.feelrich':  { en: 'Feel rich', pt: 'Sinta-se rico' },
    'btn.seemore':     { en: 'See more.', pt: 'Ver mais.' },

    // Sections
    'section.men.title':     { en: 'New in T-shirts/Hoodies', pt: 'Novidades em T-shirts/Moletons' },
    'section.men.subtitle':  { en: 'Slide sideways to see more.', pt: 'Deslize para os lados para ver mais.' },
    'section.women.title':   { en: 'New in Joggers/Shorts', pt: 'Novidades em Manjucos/Calções' },
    'section.women.subtitle':{ en: 'Slide sideways to see more.', pt: 'Deslize para os lados para ver mais.' },
    'section.kids.title':    { en: 'New in accessories', pt: 'Novidades em acessórios' },
    'section.kids.subtitle': { en: 'Slide sideways to see more.', pt: 'Deslize para os lados para ver mais.' },

    // Explore
    'explore.title':   { en: 'Explore our products', pt: 'Explore nossos produtos' },
    'explore.lead':    { en: 'Leather products – belts, bags and keychains created for you who work hard and conquer the impossible.', pt: 'Produtos em couro – cintos, bolsas e chaveiros criados para você que trabalha duro e conquista o impossível.' },
    'explore.quote':   { en: 'What you wear sends a message..', pt: 'O que você veste transmite uma mensagem..' },
    'explore.p1':      { en: 'Each piece is designed for ambitious people like you: refined details, good quality and a touch of accessible luxury that inspires every day.', pt: 'Cada peça é desenhada para pessoas ambiciosas como você: detalhes refinados, boa qualidade e um toque de luxo acessível que inspira todos os dias.' },
    'explore.p2':      { en: 'The energy you invest in your hustle returns multiplied into wealth. Start here, with items that elevate your status.', pt: 'A energia que investes no teu hustle volta multiplicada em riqueza. Começa aqui, com itens que elevam o teu status.' },
    'explore.belts':   { en: 'Leather belts', pt: 'Cintos de couro' },
    'explore.bags':    { en: 'Leather bags', pt: 'Bolsas de couro' },
    'explore.soon':    { en: 'Available soon', pt: 'Disponível em breve' },

    // Contact
    'contact.store':   { en: 'Store location:', pt: 'Localização da loja:' },
    'contact.whatsapp':{ en: 'WhatsApp:', pt: 'WhatsApp:' },
    'contact.office':  { en: 'Office location:', pt: 'Localização do escritório:' },
    'contact.hours':   { en: 'Working hours:', pt: 'Horário de trabalho:' },
    'contact.email':   { en: 'Email:', pt: 'Email:' },
    'contact.social':  { en: 'Social Networks:', pt: 'Redes Sociais:' },

    // Footer
    'footer.online':   { en: 'Online store', pt: 'Loja on-line' },
    'footer.shopping': { en: 'Shopping & categories', pt: 'Compras & categorias' },
    'footer.men':      { en: "Men's shopping", pt: 'Compras Masculinas' },
    'footer.women':    { en: "Women's shopping", pt: 'Compras Femininas' },
    'footer.useful':   { en: 'Useful links', pt: 'Links úteis' },
    'footer.home':     { en: 'Home page', pt: 'Página inicial' },
    'footer.help':     { en: 'Help', pt: 'Ajuda' },
    'footer.helpinfo': { en: 'Help & Information', pt: 'Ajuda & Informação' },
    'footer.faq':      { en: 'Frequently Asked Questions', pt: 'Perguntas Frequentes' },
    'footer.shipping': { en: 'Shipping', pt: 'Envio' },
    'footer.copyright':{ en: 'Copyright © 2026 Feel Rich All rights reserved.', pt: 'Copyright © 2026 Feel Rich Todos os direitos reservados.' }
  };

  function applyLanguage(lang) {
    if (!supported.includes(lang)) lang = defaultLang;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang] !== undefined) {
        if (el.children.length === 0) {
          el.textContent = translations[key][lang];
        } else {
          var textNode = Array.from(el.childNodes).find(n => n.nodeType === 3);
          if (textNode) textNode.textContent = translations[key][lang];
        }
      }
    });

    var btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = lang.toUpperCase();

    document.documentElement.lang = lang;
    try { localStorage.setItem('siteLang', lang); } catch(e) {}
  }

  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('lang-btn');
    if (btn) {
      btn.addEventListener('click', function() {
        var current = localStorage.getItem('siteLang') || defaultLang;
        var next = (current === 'en') ? 'pt' : 'en';
        applyLanguage(next);
      });
    }
    var saved = localStorage.getItem('siteLang') || defaultLang;
    applyLanguage(saved);
  });

  window.applyLanguage = applyLanguage;
})();
