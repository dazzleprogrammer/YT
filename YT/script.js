// change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0 )
})

// change faq boxes

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus"
        }else{
            icon.className = "fa-solid fa-plus" 
        }
    })
})

