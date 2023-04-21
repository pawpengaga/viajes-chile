$(document).ready(function () {
    $(window).scroll(function () {
        const navBarAlpha = $('#navbar');

        const mItem0 = $('#menu-item0');
        const mItem1 = $('#menu-item1');
        const mItem2 = $('#menu-item2');
        const mItem3 = $('#menu-item3');
        const mItem4 = $('#menu-item4');

        if ($(window).scrollTop() > 75) {
            navBarAlpha.addClass('navbar-scrolled');
            navBarAlpha.removeClass('transparent');

            mItem0.removeClass('text-white');
            mItem1.removeClass('text-white');
            mItem2.removeClass('text-white');
            mItem3.removeClass('text-white');
            mItem4.removeClass('text-white');

            mItem0.addClass('text-dark');
            mItem1.addClass('text-dark');
            mItem2.addClass('text-dark');
            mItem3.addClass('text-dark');
            mItem4.addClass('text-dark');

        }else{
            navBarAlpha.removeClass('navbar-scrolled');
            navBarAlpha.addClass('transparent');

            mItem0.addClass('text-white');
            mItem1.addClass('text-white');
            mItem2.addClass('text-white');
            mItem3.addClass('text-white');
            mItem4.addClass('text-white');

            mItem0.removeClass('text-dark');
            mItem1.removeClass('text-dark');
            mItem2.removeClass('text-dark');
            mItem3.removeClass('text-dark');
            mItem4.removeClass('text-dark');
        }
    });
});