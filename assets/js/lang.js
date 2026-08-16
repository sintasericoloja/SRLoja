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
    'nav.pages':       { en: 'Pages', pt: 'Páginas' },
    'nav.links':       { en: 'Links', pt: 'Links' },

    // Common buttons / labels
    'btn.seemore':     { en: 'See more.', pt: 'Ver mais.' },
    'btn.order':       { en: 'Order on WhatsApp', pt: 'Pedir no WhatsApp' },
    'brand.feelrich':  { en: 'Feel rich', pt: 'Sinta-se rico' },

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
    'footer.copyright':{ en: 'Copyright © 2026 Feel Rich All rights reserved.', pt: 'Copyright © 2026 Feel Rich Todos os direitos reservados.' },

    // Contact
    'contact.store':   { en: 'Store location:', pt: 'Localização da loja:' },
    'contact.whatsapp':{ en: 'WhatsApp:', pt: 'WhatsApp:' },
    'contact.office':  { en: 'Office location:', pt: 'Localização do escritório:' },
    'contact.hours':   { en: 'Working hours:', pt: 'Horário de trabalho:' },
    'contact.email':   { en: 'Email:', pt: 'Email:' },
    'contact.social':  { en: 'Social Networks:', pt: 'Redes Sociais:' }
  };

  function applyLanguage(lang) {
    if (!supported.includes(lang)) lang = defaultLang;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang] !== undefined) {
        if (el.children.length === 0) {
          el.textContent = translations[key][lang];
        } else {
          // Keep nested elements (like <br> or <span>)
          var textNode = Array.from(el.childNodes).find(n => n.nodeType === 3);
          if (textNode) {
            textNode.textContent = translations[key][lang];
          }
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

  // Expose for testing
  window.applyLanguage = applyLanguage;
})();
