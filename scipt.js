// =============================
// AOS Animation Initialize
// =============================

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});


// =============================
// Navbar Background on Scroll
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(18, 11, 8, 0.95)";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    }

    else {
        navbar.style.background = "rgba(20,12,8,0.6)";
        navbar.style.boxShadow = "none";
    }

});


// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =============================
// Active Navbar Link
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// =============================
// Floating Hero Card Animation
// =============================

const floatingCard =
    document.querySelector(".floating-card");

if (floatingCard) {

    setInterval(() => {

        floatingCard.animate(
            [
                {
                    transform:
                    "translateY(0px)"
                },

                {
                    transform:
                    "translateY(-10px)"
                },

                {
                    transform:
                    "translateY(0px)"
                }

            ],

            {
                duration: 2500,
                iterations: 1
            }

        );

    }, 2500);

}


// =============================
// Auto Play Videos on Hover
// =============================

const videos =
    document.querySelectorAll(
        ".video-grid video"
    );

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {

        video.play();

    });

    video.addEventListener("mouseleave", () => {

        video.pause();

        video.currentTime = 0;

    });

});


// =============================
// Reveal Elements on Scroll
// =============================

const revealElements =
    document.querySelectorAll(

        ".gallery-item, .service-card, .testimonial-card"

    );

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("show");

            if (typeof AOS !== "undefined") {
    
}

        }

    });

};

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// =============================
// Typewriter Effect
// =============================

const text =
"Bringing Energy to Every Stage";

const typeTarget =
document.querySelector(".tagline");

if (typeTarget) {

    typeTarget.innerHTML = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            typeTarget.innerHTML +=
            text.charAt(i);

            i++;

            setTimeout(
                typeWriter,
                70
            );

        }

    }

    typeWriter();

}
