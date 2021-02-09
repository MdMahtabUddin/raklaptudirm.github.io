let currentTitle = 0;
const TITLES = [
        "Creator of Mkode.",
        "Creator of 3d Processing Engine.",
        "Javascript expert.",
        "Class 9 student.",
        "Bookworm and Speedcuber."
    ];

const splashTitleElement = document.querySelector(".splash-super-title");
setInterval(showNextTitle, 5000);

function showNextTitle() {
    splashTitleElement.classList.add("switch");
    setTimeout(function () {
        currentTitle++;
        if (currentTitle === TITLES.length) {
            currentTitle = 0;
        }
        splashTitleElement.innerText = TITLES[currentTitle];
        splashTitleElement.classList.remove("switch");
    }, 120);
}

$('.splash-scroll-down').click(function () {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': window.innerHeight
    });
});

$('.splash-scroll-down').mouseenter(function () {
    document.querySelector('.splash-scroll-down').classList.add('inter');
});

$('.splash-scroll-down').mouseleave(function () {
    document.querySelector('.splash-scroll-down').classList.remove('inter');
});
