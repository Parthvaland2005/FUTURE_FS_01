function myMenuFunction() {
    var menu = document.getElementById("myNavMenu");
    menu.classList.toggle("responsive");
}

window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "80px";
    }
}
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

ScrollReveal().reveal('.featured-text', { delay: 200 });
ScrollReveal().reveal('.featured-image', { delay: 400 });
ScrollReveal().reveal('.project-box', { interval: 200 });
ScrollReveal().reveal('.skills-box', { interval: 200 });
(function(){
emailjs.init("hhEa9uBrETMRJVNlm");
})();

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.send("service_rcsf3i8","template_i49rpkq",{

name: this.name.value,
email: this.email.value,
message: this.message.value

})
.then(function(){

message.innerHTML = "✅ Message sent successfully!";
form.reset();

}, function(error){

message.innerHTML = "❌ Failed to send message.";

});

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach((link) => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});