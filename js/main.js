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
