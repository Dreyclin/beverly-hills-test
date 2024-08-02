const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1
}).mount();

const secondGlide = new Glide('.glide-adv', {
    type: 'carousel',
    perView: 1,
}).mount();

$('#menu-toggler').on('click', () => {
    $('.nav-container').toggleClass('hidden');
    $('header').toggleClass('zero-margin');
})

$('#tours-toggler').on('click', () => {
    $('.tours-list').toggleClass('hidden');
})

$('#offer-toggler').on('click', () => {
    $('.offer-list').toggleClass('hidden');
})