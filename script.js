// Animações de scroll
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in-left, .fade-in-right")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

// Event listeners
window.addEventListener("scroll", handleScrollAnimations)
window.addEventListener("load", handleScrollAnimations)

// Formulário de contato
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  // Simular envio do formulário
  const button = this.querySelector('button[type="submit"]')
  const originalText = button.textContent

  button.textContent = "ENVIANDO..."
  button.disabled = true

  setTimeout(() => {
    button.textContent = "ENVIADO!"
    button.style.background = "#10b981"

    setTimeout(() => {
      button.textContent = originalText
      button.disabled = false
      button.style.background = ""
      this.reset()
    }, 2000)
  }, 1500)
})

// Smooth scroll para botões
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    // Adicionar efeito de clique
    this.style.transform = "translateY(0)"
    setTimeout(() => {
      this.style.transform = ""
    }, 150)
  })
})

// Efeito hover nos ícones sociais
document.querySelectorAll(".social-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)"
  })

  icon.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)"
  })
})

// Efeito parallax no hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector(".hero-car")

  if (parallax) {
    const speed = scrolled * 0.5
    parallax.style.transform = `translateY(calc(-50% + ${speed}px))`
  }
})

// Contador animado (se necessário)
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    element.textContent = Math.floor(start)

    if (start >= target) {
      element.textContent = target
      clearInterval(timer)
    }
  }, 16)
}

// Inicializar quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  console.log("Sellera Landing Page carregada!")

  // Adicionar classe de carregamento
  document.body.classList.add("loaded")

  // Inicializar animações
  handleScrollAnimations()
})

// Otimização de performance para scroll
let ticking = false

function updateScrollAnimations() {
  handleScrollAnimations()
  ticking = false
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollAnimations)
    ticking = true
  }
})
