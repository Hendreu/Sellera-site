// Contact Form Validation and Submission
class ContactFormHandler {
  constructor() {
    this.mainForm = document.getElementById("mainContactForm")
    this.footerForm = document.getElementById("footerContactForm")
    this.init()
  }

  init() {
    if (this.mainForm) {
      this.mainForm.addEventListener("submit", (e) => this.handleMainFormSubmit(e))
      this.setupRealTimeValidation(this.mainForm)
    }

    if (this.footerForm) {
      this.footerForm.addEventListener("submit", (e) => this.handleFooterFormSubmit(e))
    }
  }

  setupRealTimeValidation(form) {
    const inputs = form.querySelectorAll("input, textarea")
    inputs.forEach((input) => {
      input.addEventListener("blur", () => this.validateField(input))
      input.addEventListener("input", () => this.clearError(input))
    })
  }

  validateField(field) {
    const value = field.value.trim()
    const fieldName = field.name
    let isValid = true
    let errorMessage = ""

    // Clear previous error
    this.clearError(field)

    // Required field validation
    if (!value) {
      errorMessage = "Este campo é obrigatório"
      isValid = false
    } else {
      // Specific validations
      switch (fieldName) {
        case "fullName":
        case "footerName":
          if (value.length < 2) {
            errorMessage = "Nome deve ter pelo menos 2 caracteres"
            isValid = false
          }
          break

        case "emailAddress":
        case "footerEmail":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(value)) {
            errorMessage = "Por favor, insira um email válido"
            isValid = false
          }
          break

        case "subject":
          if (value.length < 3) {
            errorMessage = "Assunto deve ter pelo menos 3 caracteres"
            isValid = false
          }
          break

        case "message":
        case "footerMessage":
          if (value.length < 10) {
            errorMessage = "Mensagem deve ter pelo menos 10 caracteres"
            isValid = false
          }
          break
      }
    }

    if (!isValid) {
      this.showError(field, errorMessage)
    }

    return isValid
  }

  showError(field, message) {
    field.style.borderColor = "#ef4444"
    const errorElement = document.getElementById(field.name + "Error")
    if (errorElement) {
      errorElement.textContent = message
      errorElement.classList.add("show")
    }
  }

  clearError(field) {
    field.style.borderColor = "#374151"
    const errorElement = document.getElementById(field.name + "Error")
    if (errorElement) {
      errorElement.classList.remove("show")
    }
  }

  validateForm(form) {
    const inputs = form.querySelectorAll("input[required], textarea[required]")
    let isValid = true

    inputs.forEach((input) => {
      if (!this.validateField(input)) {
        isValid = false
      }
    })

    return isValid
  }

  async handleMainFormSubmit(e) {
    e.preventDefault()

    if (!this.validateForm(this.mainForm)) {
      this.showFormMessage("Por favor, corrija os erros antes de enviar.", "error")
      return
    }

    const submitBtn = this.mainForm.querySelector('button[type="submit"]')
    const formData = new FormData(this.mainForm)

    // Show loading state
    submitBtn.classList.add("loading")
    submitBtn.disabled = true

    try {
      // Simulate API call
      await this.submitForm(formData, "main")

      this.showFormMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.", "success")
      this.mainForm.reset()

      // Track conversion (if analytics is set up)
      this.trackFormSubmission("main_contact_form")
    } catch (error) {
      this.showFormMessage("Erro ao enviar mensagem. Tente novamente.", "error")
    } finally {
      submitBtn.classList.remove("loading")
      submitBtn.disabled = false
    }
  }

  async handleFooterFormSubmit(e) {
    e.preventDefault()

    const submitBtn = this.footerForm.querySelector('button[type="submit"]')
    const formData = new FormData(this.footerForm)

    const originalText = submitBtn.textContent
    submitBtn.textContent = "ENVIANDO..."
    submitBtn.disabled = true

    try {
      await this.submitForm(formData, "footer")

      submitBtn.textContent = "ENVIADO!"
      submitBtn.style.background = "#10b981"
      this.footerForm.reset()

      setTimeout(() => {
        submitBtn.textContent = originalText
        submitBtn.style.background = ""
        submitBtn.disabled = false
      }, 3000)
    } catch (error) {
      submitBtn.textContent = "ERRO - TENTE NOVAMENTE"
      submitBtn.style.background = "#ef4444"

      setTimeout(() => {
        submitBtn.textContent = originalText
        submitBtn.style.background = ""
        submitBtn.disabled = false
      }, 3000)
    }
  }

  async submitForm(formData, formType) {
    // Simulate API call - replace with your actual endpoint
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success/failure
        const success = Math.random() > 0.1 // 90% success rate for demo

        if (success) {
          console.log("Form submitted successfully:", {
            type: formType,
            data: Object.fromEntries(formData),
          })
          resolve()
        } else {
          reject(new Error("Submission failed"))
        }
      }, 2000)
    })
  }

  showFormMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector(".form-message")
    if (existingMessage) {
      existingMessage.remove()
    }

    // Create new message
    const messageDiv = document.createElement("div")
    messageDiv.className = `form-message ${type}`
    messageDiv.textContent = message

    // Insert before form
    this.mainForm.parentNode.insertBefore(messageDiv, this.mainForm)

    // Auto remove after 5 seconds
    setTimeout(() => {
      messageDiv.remove()
    }, 5000)
  }

  trackFormSubmission(formName) {
    // Google Analytics tracking (if implemented)
    const gtag = window.gtag // Declare gtag variable
    if (typeof gtag !== "undefined") {
      gtag("event", "form_submit", {
        form_name: formName,
        page_title: document.title,
      })
    }

    // Facebook Pixel tracking (if implemented)
    const fbq = window.fbq // Declare fbq variable
    if (typeof fbq !== "undefined") {
      fbq("track", "Lead", {
        content_name: formName,
      })
    }
  }
}

// Mobile Menu Toggle
class MobileMenu {
  constructor() {
    this.toggle = document.querySelector(".mobile-menu-toggle")
    this.menu = document.querySelector(".nav-menu")
    this.init()
  }

  init() {
    if (this.toggle && this.menu) {
      this.toggle.addEventListener("click", () => this.toggleMenu())
    }
  }

  toggleMenu() {
    this.menu.classList.toggle("active")
    this.toggle.classList.toggle("active")
  }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Phone Number Formatting
function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, "")
  if (value.length >= 11) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  } else if (value.length >= 7) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
  } else if (value.length >= 3) {
    value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2")
  }
  input.value = value
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ContactFormHandler()
  new MobileMenu()
  initSmoothScroll()

  // Add phone formatting if phone input exists
  const phoneInputs = document.querySelectorAll('input[type="tel"]')
  phoneInputs.forEach((input) => {
    input.addEventListener("input", () => formatPhoneNumber(input))
  })

  console.log("Contact page initialized successfully!")
})

// Export for use in other scripts if needed
window.ContactFormHandler = ContactFormHandler
