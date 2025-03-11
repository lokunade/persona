/*=============== MENU ===============*/

/* Menu show - hidden */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
});
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navToggle.classList.remove('animate-toggle');
    navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 20 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = windows.pageYOffset;

    sections.forEach((current) =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('load', scrollActive);

/*=============== SERVICES SWIPER ===============*/
var servicesSwiper = new Swiper('.services-swiper', {
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        768: {
        slidesPerView: 2,
        },
        1028: {
        slidesPerView: 3,
        },
    }
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

/* Active work */
const linkWork = document.querySelectorAll('.work-item');
//this function will help to ensure non of the element is active
function activeWork (){
    linkWork.forEach((a) => {
        a.classList.remove('active-work');
    });

    //active work is added to click element
    this.classList.add('active-work');
}
//looping through each element in the linkwork list
linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*=============== RESUME ===============*/
const accordionItems = document.querySelectorAll('.resume-item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.resume-header');
    const content = item.querySelector('.resume-content');
    const icon = item.querySelector('.resume-icon i');


    header.addEventListener('click', () => {
        const isOpen = item.classList.toggle('accordion-open');

        content.style.height = isOpen ? content.scrollHeight + 'px' : '0px';
        icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';
    });
});


/*=============== TESTIMONIALS SWIPER ===============*/
var servicesSwiper = new Swiper('.testimonials-swiper', {
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        768: {
        slidesPerView: 2,
        },
        1028: {
        slidesPerView: 3,
        },
    }
});
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
contactName = document.getElementById('contact-name');
contactEmail = document.getElementById('contact-email');
contactSubject = document.getElementById('contact-subject');
contactMessage = document.getElementById('contact-message');
message = document.getElementById('message');
// a function when sending email to stop page from reloading when message is sent
const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' ||
        contactMessage.value === ''
    ){
        message.classList.remove('color-first');
        message.classList.add('color-red');
        message.textContent = 'Write all input fields';

        setTimeout (() => {
            message.textContent = '';
        }, 3000);
    }else {
        emailjs.sendForm('service_qfkkwqo', 'template_5zebo8g', '#contact-form', 'gzL2wMUpzFGtgunyL').then(
            (response) => {
              message.classList.add('color-first');
              message.textContent = 'Message sent ✔';
              setTimeout (() => {
                message.textContent = '';
            }, 5000);

            },
            (error) => {
              alert('OOPs! SOMETHING WENT WRONG...');
            },
        );
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);
/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.getElementById('style-switcher');
switcherToggle = document.getElementById('switcher-toggle');
switcherClose = document.getElementById('switcher-close');
/* Switcher show */
switcherToggle.addEventListener('click', () =>{
    styleSwitcher.classList.add('show-switcher');
});
/* Switcher hidden */
switcherClose.addEventListener('click', () =>{
    styleSwitcher.classList.remove('show-switcher');
});
/*=============== THEME COLORS ===============*/
const colors = document.querySelectorAll('.style-switcher-color'); //selecting everythat has color style in css
colors.forEach((color) => {
    color.onclick = () => {
        const activeColor = color.style.getPropertyValue('--hue');

        colors.forEach((c) => c.classList.remove('activeColor')); //removing active color so non is mark as active color

        color.classList.add('activeColor');//adding to the click color element

        document.documentElement.style.setProperty('--hue', activeColor);//updating custom css property hue
    };
});
/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = 'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name ="body-theme"]').forEach((input) => {
    input.addEventListener('change', () => {
        currentTheme = input.value;
        document.body.className = currentTheme;
    });
});