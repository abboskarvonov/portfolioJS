// Typed JS
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Frontend Developer", "Backend Developer", "Graphic Designer", "Full Stack Developer", "MERN Stack Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
})

// Navbar 
const navToggler = document.querySelector('.nav-toggler')
navToggler.addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('open')
    navToggler.classList.toggle('nav-toggler-left')
})

// Active link
const linkColor = document.querySelectorAll('.nav li a')

function activeLink() {
    if (linkColor) {
        linkColor.forEach(link => link.classList.remove('active'))
        this.classList.add('active')

    }
}

linkColor.forEach(link => link.addEventListener('click', activeLink))

function scrollUp() {
    const scroll = document.querySelector('.scroll-up')
    if(this.scrollY >= 450) {
        scroll.classList.add('scroll-show')
    }
    else {
        scroll.classList.remove('scroll-show')
    }
}

window.addEventListener('scroll', scrollUp)