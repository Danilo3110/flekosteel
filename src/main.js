'use strict';

const url = `http://localhost:3001`;
const headers = { 'Content-Type': 'application/json' };
const api = axios.create({baseURL: `${url}`});

const getFromDatabase = async (query) => {
    try {
        const response = await api.get(`${query}`, { headers });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const postToDatabase = async (tableName, data) => {
    try {
        await api.post(`${tableName}`, data, { headers });
    } catch (error) {
        console.log(error);
    }
};

const sendData = () => {
    $('#submit_order').on('click', () => {
        const regex = $('#name').val() !== '' && $('#address').val() !== '' && $('#tel').val() !== '';
        if (regex) {
            const currentDate = new Date();
            const orderCreated = currentDate.toLocaleString('sr-RS');
        
            const orderData = {
                ime_prezime: $('#name').val(),
                adresa: $('#address').val(),
                telefon: $('#tel').val(),
                datum: orderCreated
            };
            (async () => {
                await postToDatabase('/narudzbine', orderData);
                alert('Uspešno ste naručili FlekoSteel');
                $('input').val('');
            })();
        } else {
            alert('Molimo, unesite podatke');
        }
    });
};

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

$(document).on('load', AnimationsAll(), sendData());