// Arguxx Portfolio - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Arguxx Portfolio loaded!");

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Add entrance animation to cards with stagger effect
    const cards = document.querySelectorAll(".bento-card");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });

    // Add hover effect sound feedback (optional)
    const linkCards = document.querySelectorAll(".bento-card--link");
    linkCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
        });
    });

    // Status indicator pulse animation
    const statusDot = document.querySelector(".status-dot");
    if (statusDot) {
        setInterval(() => {
            statusDot.style.transform = "scale(1.2)";
            setTimeout(() => {
                statusDot.style.transform = "scale(1)";
            }, 300);
        }, 2000);
    }

    // Add copy email functionality
    const emailCard = document.querySelector(".bento-card--email");
    if (emailCard) {
        emailCard.addEventListener("click", function (e) {
            e.preventDefault();
            const email = "argianradityaputra21@gmail.com";

            // Try to copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard
                    .writeText(email)
                    .then(() => {
                        showNotification("Email copied to clipboard!");
                    })
                    .catch(() => {
                        window.location.href = `mailto:${email}`;
                    });
            } else {
                window.location.href = `mailto:${email}`;
            }
        });
    }

    // Show notification function
    function showNotification(message) {
        const notification = document.createElement("div");
        notification.className = "notification";
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add("show");
        }, 10);

        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }

    // Add keyboard navigation support
    document.addEventListener("keydown", function (e) {
        // Press 'H' to go home (scroll to top)
        if (e.key === "h" || e.key === "H") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    // Performance: Lazy load social icons
    const socialLinks = document.querySelectorAll(".social-item");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        });

        socialLinks.forEach((link) => observer.observe(link));
    } else {
        socialLinks.forEach((link) => link.classList.add("visible"));
    }

    // Add current year to footer (if needed in future)
    const currentYear = new Date().getFullYear();
    console.log(`© ${currentYear} Arguxx`);

    // Log performance metrics
    window.addEventListener("load", () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
});

// Add dark mode toggle (optional feature for future)
function toggleTheme() {
    document.body.classList.toggle("light-mode");
    const isDark = !document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Check for saved theme preference
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}
