// Shrink header on scroll
    const siteHeader = document.getElementById("site-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        siteHeader.classList.add("shrink");
      } else {
        siteHeader.classList.remove("shrink");
      }
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Smooth scroll for nav links
    document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
