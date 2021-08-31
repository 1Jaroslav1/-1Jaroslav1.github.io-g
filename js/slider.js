function slider({container, slide, nextArrow, prevArrow,wrapper, field}) {
    let offset = 0;

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        slidesWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector(field);

    
    // slidesField.style.width = 100 * slides.length + '%';
    // slidesField.style.display = 'flex';
    // slidesField.style.transition = '0.5s all';

    // slidesWrapper.style.overflow = 'hidden';

    // slides.forEach(slide => {
    //     slide.style.width = width;
    // });

    // slider.style.position = 'relative';

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

export default slider;