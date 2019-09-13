'use strict';

const animateFocus = (toLocation) => {
    $('html, body').animate({ scrollTop: $(`${toLocation}`).offset().top }, 1000);
};

$(document).ready(() => {
    $('#title').on('click', () => animateFocus('.logo1'));
    $('#price_tag').on('click', () => animateFocus('.form_title'));
    $('.desc_button').on('click', () => animateFocus('.logo2'));
});