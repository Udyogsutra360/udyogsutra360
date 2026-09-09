/**
 * Udyog Sutra 360 - Interactive JS
 * Mouse spotlight, Custom magnetic cursor, 3D Tilt cards, Dynamic Language Switcher
 */

document.addEventListener("DOMContentLoaded", () => {
    initMouseFollower();
    initLanguageSwitcher();
    initScrollObserver();
    initTiltEffect();
});

// 1. Mouse Spotlight & Custom Cursor Follower
function initMouseFollower() {
    const spotlight = document.getElementById("spotlight");
    const cursor = document.getElementById("cursor");

    if (!spotlight || !cursor) return;

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        spotlight.style.left = `${x}px`;
        spotlight.style.top = `${y}px`;

        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    });

    // Magnetic interaction on buttons/links
    const magnetics = document.querySelectorAll(".magnetic-element, .btn, .nav-links a");
    magnetics.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
            cursor.style.backgroundColor = "rgba(7, 95, 216, 0.6)";
        });

        elem.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.backgroundColor = "var(--sunrise-orange, #ff6b00)";
        });
    });
}

// 2. Language Toggle (Marathi <-> English)
function initLanguageSwitcher() {
    const langBtn = document.getElementById("langBtn");
    if (!langBtn) return;

    let currentLang = "mr";

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "mr" ? "en" : "mr";
        document.documentElement.setAttribute("data-lang", currentLang);

        const translatableElements = document.querySelectorAll("[data-mr]");
        translatableElements.forEach((el) => {
            const newText = el.getAttribute(`data-${currentLang}`);
            if (newText) {
                el.textContent = newText;
            }
        });
    });
}

// 3. Intersection Observer Scroll Reveal
function initScrollObserver() {
    const animatedElements = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach((el) => observer.observe(el));
}

// 4. Mouse Move Interactive 3D Card Shake / Tilt
function initTiltEffect() {
    const tiltCards = document.querySelectorAll(".tilt-card");

    tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const tiltX = (y / rect.height) * 14;
            const tiltY = -(x / rect.width) * 14;

            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        });
    });
}

// 5. Image Modal Handlers
function openImageModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imgSrc;
    }
}

function closeImageModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// 6. Submit Success Modal Handlers
function showSubmitModal() {
    const modal = document.getElementById("submitModal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeSubmitModal() {
    const modal = document.getElementById("submitModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// 7. Form Submission Handler
async function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("custName").value.trim();
    const phoneInput = document.getElementById("custPhone").value.trim();
    const serviceSelect = document.getElementById("custService");
    const selectedService = serviceSelect.options[serviceSelect.selectedIndex]?.text || serviceSelect.value;

    if (!nameInput || !phoneInput || !serviceSelect.value) {
        alert("कृपया सर्व माहिती भरा / Please fill out all required fields.");
        return;
    }

    const targetNumber = "918652871521";
    const submitBtn = event.target.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.innerText : "संदेश पाठवा";

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";
    }

    try {
        // Attempt backend WhatsApp API delivery
        const response = await fetch("https://your-domain.com/api/send-whatsapp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipient: targetNumber,
                name: nameInput,
                phone: phoneInput,
                service: selectedService
            })
        });

        if (response.ok) {
            showSubmitModal();
            event.target.reset();
        } else {
            throw new Error("Backend API unreachable");
        }
    } catch (error) {
        // Fallback: Open WhatsApp directly if API endpoint is not active
        console.warn("Backend API not reachable. Falling back to direct WhatsApp redirect.");
        
        const textMessage = `*New Business Inquiry - Udyog Sutra 360*%0A%0A` +
                            `👤 *Name / Business:* ${encodeURIComponent(nameInput)}%0A` +
                            `📞 *Phone Number:* ${encodeURIComponent(phoneInput)}%0A` +
                            `🎯 *Service Required:* ${encodeURIComponent(selectedService)}`;

        showSubmitModal();
        
        setTimeout(() => {
            const waUrl = `https://wa.me/${targetNumber}?text=${textMessage}`;
            window.open(waUrl, "_blank");
        }, 1000);

        event.target.reset();
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        }
    }
}