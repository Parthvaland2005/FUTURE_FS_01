
function myMenuFunction() {
    var menu = document.getElementById("myNavMenu");
    menu.classList.toggle("responsive");

}

window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (window.scrollY > 80) {
        navHeader.classList.add("scrolled");
    } else {
        navHeader.classList.remove("scrolled");
    }
}
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    try {
        const response = await fetch("https://portfolio-backend-r8c5.onrender.com/send", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
});

        const data = await response.json();

        if (data.success) {
            alert(" Message Sent Successfully!");
            this.reset();
        } else {
            alert(" Failed to send message.");
        }

    } catch (error) {
    console.error(error);
    alert("Server Error. Try again later.");
}
});

const themeToggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
});


ScrollReveal().reveal('.featured-text', { 
    origin: 'left', 
    distance: '50px', 
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.featured-image', { 
    origin: 'right', 
    distance: '50px', 
    duration: 1000,
    delay: 400
});

ScrollReveal().reveal('.section', { 
    origin: 'bottom', 
    distance: '40px', 
    duration: 1000,
    interval: 200
});
window.addEventListener("load", function(){
    document.getElementById("loader").style.display="none";
});


