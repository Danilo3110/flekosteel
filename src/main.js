'use strict';

const animateFocus = (toLocation) => {
    $('html, body').animate({ scrollTop: $(`${toLocation}`).offset().top }, 1000);
};

const AnimationsAll = () => {
    $(document).ready(() => {
        $(window).scroll(() => {
            return $(window).scrollTop() > 80 ?
                $('.box').css({backgroundColor: 'rgba(13, 23, 37, 0.9)', backgroundImage: 'none'}) :
                $('.box').css({backgroundColor: 'rgba(0, 0, 0, 0)', backgroundImage: 'linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.59) 100%)'});
        });
    });

    $(document).ready(() => {
        $('#site_logo, #home').on('click', () => animateFocus('.main'));
        $('#about').on('click', () => animateFocus('.main_info'));
        $('#ingredients').on('click', () => animateFocus('.logo1'));
        $('#delivery').on('click', () => animateFocus('.box_usage'));
        $('#title, #order').on('click', () => animateFocus('.logo2'));
        $('#price_tag').on('click', () => animateFocus('.form_title'));
        $('.desc_button').on('click', () => animateFocus('.logo2'));
    });
};

$(document).on('load', AnimationsAll());