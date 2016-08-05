$(document).ready(function () {

    // plugin 1 - hamburger nav
    $('#menu').slicknav({
        prependTo: '#demo1'
    });

	// jQuery for smooth scroll
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

});

// Custom JavaScript for slideshow clicks
document.getElementById('dailySlideshow').addEventListener('click', myFunction);

function myFunction() {
    document.getElementById('captionQuote').innerHTML = "<strong><em>'Everything they do is so dramatic and flamboyant. It makes me want to set myself on fire.' -Lucille</em></strong>";
}
