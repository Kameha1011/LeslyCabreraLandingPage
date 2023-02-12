const nav = document.querySelector('nav');
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// change nav bgcolor
window.addEventListener('scroll', () => {
    (window.scrollY >= 100)? nav.setAttribute('id', 'navbar') : nav.removeAttribute('id');
})