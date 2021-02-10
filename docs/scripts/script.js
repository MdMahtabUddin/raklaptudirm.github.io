$(document).ready(function () {
	$(".scroll").hide()

    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': 0
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $(".scroll").hide()
        } else {
            $(".scroll").show()
        }
    });

    $('.scroll').click(function () {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': 0
        });
    });

    $('.logo').click(function () {
        window.open("https://raklaptudirm.github.io/", "_self")
    });

});