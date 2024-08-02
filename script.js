document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel', // тип слайдера (может быть 'carousel' или 'slider')
        perView: 1 // количество отображаемых слайдов одновременно
    }).mount();
});