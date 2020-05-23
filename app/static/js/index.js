/* eslint-env node, mocha, es6 */
/* eslint-disable no-unused-vars */
'use strict'

import $ from 'jquery'

(function () {

    'use strict'

    $(window).on('load', function () {
        const $preloader = $('#loader')
        $preloader.delay(1000).fadeOut('slow')
    })

    $(function () {

        'use strict'
        
        $('.select__server .select').on('click', () => {
            $('.select i').toggleClass('fa-angle-down')
            $('.select i').toggleClass('fa-angle-up select__i')
            $('.select__server .options').fadeToggle(300)
        })

        $('.select__server .options ul li').on('click', function () {
            $('.select i').addClass('fa-angle-down')
            $('.select i').removeClass('fa-angle-up select__i')
            $('.select__server .options').fadeOut(300)
            $('.select__server .select h1').text($(this)[0].textContent)
        })
        
        const a = $('#q').load('https://mta-servers.ru/server-415 .playersOnline')
        
        console.log(a)
        
       
        
    })
    
})(window, document)