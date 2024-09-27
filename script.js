let nextButton = document.getElementById('nextButton');
let prevButton = document.getElementById('prevButton');
let container = document.querySelector('.loffre');
let items = container.querySelectorAll('.arts');

let active = 0;
let lastPosition = items.length - 1;

function setSlider() {
    items.forEach(item => item.classList.remove('active'));
    items[active].classList.add('active');
}

nextButton.onclick = () => {
    active = (active + 1) > lastPosition ? 0 : (active + 1);
    setSlider();
}

prevButton.onclick = () => {
    active = (active - 1) < 0 ? lastPosition : (active - 1);
    setSlider();
}

// SCROLL ANIMATIONS ------------------------------------------


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))


// TRANSLATES ---------------------------------------------------



const translations = {
    fr: {
        title: "BIENVENUE CHEZ ZAGHI AGENCY",
        buttonText: "CONTACT",
        aboutTitle: "À PROPOS DE NOUS",
        aboutContent: "SPÉCIALISÉE DANS LA COMMUNICATION DIGITALE POUR LE SPORT...",
        servicesTitle: "NOS SERVICES",
        footer: "Copyright © 2024 test. Tous droits réservés."
    },
    en: {
        title: "WELCOME TO ZAGHI AGENCY",
        buttonText: "CONTACT",
        aboutTitle: "ABOUT US",
        aboutContent: "SPECIALIZED IN DIGITAL COMMUNICATION FOR SPORTS...",
        servicesTitle: "OUR SERVICES",
        footer: "Copyright © 2024 test. All rights reserved."
    },
};

document.addEventListener('DOMContentLoaded', function () {
    const langButtons = document.querySelectorAll('.butt-lang');

    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    function changeLanguage(lang) {
        const content = translations[lang];

        // Alterando o texto das seções com base no idioma selecionado
        document.querySelector('.infos-home h1').innerHTML = content.title;
        document.querySelector('.infos-home button').textContent = content.buttonText;
        document.querySelector('.propos h1').textContent = content.aboutTitle;
        document.querySelector('.propos p.p1').textContent = content.aboutContent;
        document.querySelector('.loffre h1').textContent = content.servicesTitle;
        document.querySelector('footer p').textContent = content.footer;
    }
});