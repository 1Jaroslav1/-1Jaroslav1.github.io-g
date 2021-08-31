function slider({container, slide, nextArrow, prevArrow,wrapper, field}) {
    let offset = 0;

    const slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        slidesWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector(field);

    next.addEventListener('click', () => {
        if (offset == (deleteNotDigits(width) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width); 
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }
}

function closeModals(modalSelector) {
    const modals = document.querySelectorAll(modalSelector);

    modals.forEach(modal => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });
}

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function modal(triggerSelector, modalSelector) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelectorAll(modalSelector);
    

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', (e) => {
            openModal('.data_' + e.target.getAttribute("data-type-in"));
        });
    });

    modal.forEach(msg => {
        msg.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-close') == "") {
                closeModals(modalSelector);
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', function() {
    slider({
        container: '.slider',
        slide: '.slider__slide',
        nextArrow: '.slider__next',
        prevArrow: '.slider__prev',
        wrapper: '.slider__wrapper',
        field: '.slider__inner'
    });
    modal('[data-modal]', '[data-massage]')
});