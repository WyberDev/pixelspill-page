const translations = {
  es: {
    about_title: "Sobre nosotros...",
    about_description: "PixelSpill Studios es un estudio independiente enfocado en crear experiencias inmersivas, mecánicas pulidas y estilos visuales únicos que desafían lo convencional. Transformamos ideas puras en universos jugables con identidad propia.",
    team_title: "Conformado por...",
    role_ceo: "CEO y director",
    role_music: "Compositor musical",
    role_lead_qa: "Líder de QA",
    role_qa: "QA",
    games_title: "Nuestros juegos",
    blinded_description: "BLINDED es un juego de terror psicológico-pasivo dónde estás ciego.",
    coming_soon: "Próximamente...",
    contact_title: "¿Surge algo? ¡Contáctanos!",
    send_email: "Enviar un email",
    terms: "Términos y condiciones",
    rights: "© 2026 PixelSpill Studios. Todos los derechos reservados."
  },
  en: {
    about_title: "About us...",
    about_description: "PixelSpill Studios is an independent studio focused on creating immersive experiences, polished mechanics, and unique visual styles that challenge the conventional. We transform raw ideas into playable universes with their own identity.",
    team_title: "Meet the team...",
    role_ceo: "CEO & Game Director",
    role_music: "Music Composer",
    role_lead_qa: "Lead QA",
    role_qa: "QA Tester",
    games_title: "Our games",
    blinded_description: "BLINDED is a passive-psychological horror game where you are blind.",
    coming_soon: "Coming Soon...",
    contact_title: "Have any questions? Contact us!",
    send_email: "Send an email",
    terms: "Terms & Conditions",
    rights: "© 2026 PixelSpill Studios. All rights reserved."
  }
};

function changeLanguage(lang) {
  // 1. Traduce todos los textos marcados con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // 2. Cambia la ruta del enlace del EULA según el idioma activo
  const termsLink = document.querySelector('a[href*="EULA"]');
  if (termsLink) {
    termsLink.href = (lang === 'en') ? 'EULA-en.html' : 'EULA.html';
  }

  // 3. Guarda la preferencia en el navegador
  localStorage.setItem('pixelspill_lang', lang);
  document.documentElement.lang = lang;
}

// Carga el idioma al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('pixelspill_lang') || 
                    (navigator.language.startsWith('es') ? 'es' : 'en');
  changeLanguage(savedLang);
});
