var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click', function() {
	overlay.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function() {
	overlay.classList.remove('show-menu');
});

var h_hght = 0;
var h_mrg = 0;
$(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        var elem = $('#top_nav');
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        }
        else {
            elem.css('top', h_mrg);
        }
    });
});