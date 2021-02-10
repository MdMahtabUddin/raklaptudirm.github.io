$(document).ready(function () {
    $('.splash-scroll-down').click(function () {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': window.innerHeight
        });
    });
})