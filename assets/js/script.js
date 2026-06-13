const servCard = document.querySelectorAll('.accordion-item');

servCard.forEach(e => {
    const header = e.querySelector('.servicehead');
    const body = e.querySelector('.servicebody');

    header.addEventListener('click', j => {
        const isOpen = e.classList.contains('active');

        // collapse all
        servCard.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.servicebody').style.maxHeight = null;
        });

        // ecpand clicked
        if(!isOpen) {
            e.classList.add('active');
            body.style.maxHeight = ContentVisibilityAutoStateChangeEvent.scrollHeight + "px";
        }
    });
});

// ==============================================================================================

const faqCard = document.querySelectorAll('.accordion');

faqCard.forEach(e => {
    const faqheader = e.querySelector('.faqhead');
    const faqbody = e.querySelector('.faqbody');

    faqheader.addEventListener('click', j => {
        const isOpen = e.classList.contains('active');

        // collapse all
        faqCard.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faqbody').style.maxHeight = null;
        });

        // ecpand clicked
        if(!isOpen) {
            e.classList.add('active');
            faqbody.style.maxHeight = ContentVisibilityAutoStateChangeEvent.scrollHeight + "px";
        }
    });
});

// ==============================================================================================

const btnGroup = document.querySelector('.menubtn');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const mobileMenu = document.querySelector('.mobilenav');

open.addEventListener ('click', () => {
    btnGroup.classList.add('active');
    btnGroup.classList.add('active');
    mobileMenu.classList.add('active');
})

close.addEventListener ('click', () => {
    btnGroup.classList.remove('active');
    btnGroup.classList.remove('active');
    mobileMenu.classList.remove('active');
})