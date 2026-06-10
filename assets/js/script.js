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

const faqCard = document.querySelectorAll('.accordion');

faqCard.forEach(e => {
    const header = e.querySelector('.faqhead');
    const body = e.querySelector('.faqbody');

    header.addEventListener('click', j => {
        const isOpen = e.classList.contains('active');

        // collapse all
        faqCard.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faqbody').style.maxHeight = null;
        });

        // ecpand clicked
        if(!isOpen) {
            e.classList.add('active');
            body.style.maxHeight = ContentVisibilityAutoStateChangeEvent.scrollHeight + "px";
        }
    });
});