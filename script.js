const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    breakpoints: {
        1920: {
            perView: 3
        },
        320: {
            perView: 1
        }
    }
}).mount();

const secondGlide = new Glide('.glide-adv', {
    type: 'carousel',
    perView: 1,
}).mount();

const mainGlide = new Glide('.glide-main', {
    type: 'carousel',
    perView: 1
}).mount();

$('#menu-toggler').on('click', () => {
    $('.navigation').toggleClass('hidden');
    $('header').toggleClass('zero-margin');
})

$('#tours-toggler').on('click', () => {
    $('.tours-list').toggleClass('hidden');
})

$('#offer-toggler').on('click', () => {
    $('.offer-list').toggleClass('hidden');
})