// Portfólio de Caroline Ferreira de Souza
// Pouco JavaScript de propósito: o site funciona sem ele. Aqui fica só a
// troca entre modo claro e escuro.
//
// O tema salvo é aplicado antes, por uma linha no <head> de cada página,
// para a página não piscar no tema errado ao carregar.

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');

function currentTheme() {
  return root.dataset.theme
    || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

// O botão mostra o tema para o qual ele leva: "Modo escuro" no claro e vice-versa.
function updateLabel() {
  if (!themeButton) return;
  const dark = currentTheme() === 'dark';
  themeButton.textContent = dark ? themeButton.dataset.labelLight : themeButton.dataset.labelDark;
  themeButton.setAttribute('aria-pressed', String(dark));
}

if (themeButton) {
  updateLabel();
  themeButton.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // sem armazenamento (navegação privada): vale só até recarregar a página
    }
    updateLabel();
  });

  // Se a pessoa não escolheu um tema, acompanha a mudança do sistema.
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateLabel);
}
