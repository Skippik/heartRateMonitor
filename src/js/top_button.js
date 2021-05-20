
(function() {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            topBtn.classList.add('top_button-show');
    }
        if (scrolled < coords) {
            topBtn.classList.remove('top_button-show');
    }
}

    function backBtn() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -400);
            setTimeout(backBtn, 0);
    }
}

    var topBtn = document.querySelector('.top_button');

    window.addEventListener('scroll', trackScroll);
    topBtn.addEventListener('click', backBtn);
})();