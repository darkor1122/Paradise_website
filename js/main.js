const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const burgerBars = document.querySelector ('.burger-btn__bars');
const allSections = document.querySelectorAll ('.section');
const footerYear = document.querySelector ('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active')

    burgerBars.classList.remove('black-bars-color');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active');
        })
    })

    handleNavItemsNavigation();

}

const handleNavItemsNavigation = () => {
    let delayTime = 0;
    

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}


const handleObserwer = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {


        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            burgerBars.classList.add('black-bars-color');
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            burgerBars.classList.remove('black-bars-color');
        }

    })
}

const handleCurrentYear  = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear ();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserwer)
