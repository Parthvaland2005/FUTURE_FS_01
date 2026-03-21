document.addEventListener("DOMContentLoaded", () => {

    function toggleMenu() {
        const menu = document.getElementById("myNavMenu");
        menu.classList.toggle("responsive");
    }

    window.toggleMenu = toggleMenu;

    window.addEventListener("scroll", () => {
        headerShadow();
        activeLink();
    });

    function headerShadow() {
        const navHeader = document.getElementById("header");

        if (window.scrollY > 80) {
            navHeader.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
            navHeader.style.height = "70px";
        } else {
            navHeader.style.boxShadow = "none";
            navHeader.style.height = "80px";
        }
    }
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function activeLink() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("myNavMenu").classList.remove("responsive");
        });
    });

    const toggle = document.getElementById("darkToggle");

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });

    if (typeof ScrollReveal !== "undefined") {
        ScrollReveal({
            distance: '60px',
            duration: 1200,
            delay: 200
        });

        ScrollReveal().reveal('.featured-text', { origin: 'left' });
        ScrollReveal().reveal('.featured-image', { origin: 'right' });
        ScrollReveal().reveal('.project-box', { interval: 200 });
        ScrollReveal().reveal('.skills-box', { interval: 200 });
    }

    if (typeof emailjs !== "undefined") {
        emailjs.init("hhEa9uBrETMRJVNlm");
    }

    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function(e){
            e.preventDefault();

            emailjs.send("service_rcsf3i8","template_i49rpkq",{
                name: this.name.value,
                email: this.email.value,
                message: this.message.value
            })
            .then(() => {
                message.innerHTML = "✅ Message sent successfully!";
                form.reset();
            })
            .catch(() => {
                message.innerHTML = "❌ Failed to send message.";
            });
        });
    }

});