document.addEventListener("DOMContentLoaded", () => {
  // 1. MOBILE NAVIGATION TOGGLE
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // 2. DARK / LIGHT MODE TOGGLE
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector("i");

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.body.removeAttribute("data-theme");
      themeIcon.className = "fa-solid fa-moon";
    } else {
      document.body.setAttribute("data-theme", "dark");
      themeIcon.className = "fa-solid fa-sun";
    }
  });

  // 3. PRODUCT FILTERING
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      productCards.forEach(card => {
        if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 4. INTERACTIVE WHATSAPP FORM REDIRECT
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const targetWhatsAppNumber = "6283165124549";
    const formattedText = `Halo KunciKreatif! Nama saya ${name} (${phone}).%0A%0APesan saya:%0A${encodeURIComponent(message)}`;
    
    // Redirect direct to WhatsApp Web/App
    window.open(`https://wa.me/${targetWhatsAppNumber}?text=${formattedText}`, "_blank");
  });
});

// 5. GALLERY LIGHTBOX MODAL
function openModal(element) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imgModalSrc");
  const img = element.querySelector("img");
  
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}