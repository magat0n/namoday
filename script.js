// Contador de dias desde 14/12/2024
function atualizarContador() {
  const inicio = new Date(2024, 11, 14); // mês começa do zero (11 = dezembro)
  const hoje = new Date();
  // Zera horas para contar apenas dias completos
  inicio.setHours(0,0,0,0);
  hoje.setHours(0,0,0,0);
  const diffMs = hoje - inicio;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const contador = document.getElementById('contador');
  contador.textContent = `Estamos juntos há ${diffDias} dia${diffDias === 1 ? '' : 's'}!`;
}

// Atualiza ao carregar e a cada dia (caso a página fique aberta)
atualizarContador();
setInterval(atualizarContador, 60 * 60 * 1000); // Atualiza a cada hora

// Frases românticas
const frases = [
  "Você é a melhor parte do meu dia.",
  "Ao seu lado, descobri o verdadeiro amor.",
  "Nosso amor é minha maior aventura.",
  "Você faz meu coração sorrir.",
  "Cada dia com você é um presente.",
];

function novaFrase() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").textContent = frase;
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarContador();
  novaFrase();
});

// Interação de ampliar imagem com descrição
document.addEventListener('DOMContentLoaded', function () {
  const fotos = document.querySelectorAll('.fotos img');
  const modalBg = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const modalDesc = document.getElementById('modalDesc');
  const closeBtn = document.getElementById('closeImgModal');

  fotos.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalDesc.textContent = img.getAttribute('data-desc');
      modalBg.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', () => {
    modalBg.classList.remove('active');
    document.body.style.overflow = '';
  });

  modalBg.addEventListener('click', (e) => {
    if (e.target === modalBg) {
      modalBg.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ESC para fechar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBg.classList.contains('active')) {
      modalBg.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
