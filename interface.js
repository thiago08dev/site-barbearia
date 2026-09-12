/* ============================================
   CONFIGURAÇÃO — EDITE AQUI SEUS DADOS
   ============================================ */
const CONFIG = {
  whatsapp: "5571984007295", // número com DDD, só dígitos
  instagram: "https://instagram.com/barbeariaimperial",
  instagramUser: "@barbeariaimperial",
  endereco: "Rua Exemplo, 123 — Centro, São Paulo/SP",
  horario: "Seg a Sáb — 9h às 20h",
};

/* Monta os links de WhatsApp em todos os botões com data-wa */
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(el.dataset.wa)}`;
});

/* Menu mobile */
const btnMenu = document.getElementById("btn-menu");
const navMobile = document.getElementById("nav-mobile");
btnMenu.addEventListener("click", () => navMobile.classList.toggle("hidden"));
navMobile.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navMobile.classList.add("hidden"))
);

/* Animação de entrada ao rolar a página */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* Ano automático no rodapé */
document.getElementById("ano").textContent = new Date().getFullYear();
