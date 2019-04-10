$(document).ready(function(){


    if (document.documentMode || /MSIE/.test(navigator.userAgent)) {
        $('html').addClass('ie');
    }else{
        $('html').addClass('notIe');
    }

    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        $('html').addClass('Edge');
    }






    $(window).resize(function(){
        var header = $('header').outerHeight();
        $(window).scroll(function(){
            if ($(window).scrollTop() > header) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });

        $('main.page').css({
            'padding-top':header+'px'
        });

    });
    $(window).resize();

    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    if($('.main_slider .slider_item').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            fade:true,
            infinite:false,
            //speed: 1000,
            //autoplay: true,
            //autoplaySpeed: 2000,
        });
    }



    if($(".product_slider .slider_item").length >4){
        $('.product_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            //infinite:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:2,
                    }
                },

                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    if($(".portfolio_slider .slider_item").length >3){
        $('.portfolio_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            //infinite:false,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow:2,
                    }
                },

                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }






    $('.c_nav li').each(function(){
        var c_nav_li =$(this);
        var arrow =$(this).find('.arrow');
        var sub_menu =$(this).find('.sub_menu');
        $(arrow).click(function(){
            $(c_nav_li).toggleClass('open');
            $(sub_menu).slideToggle();
        });
    });


    $('.filter_nav .filter_group').each(function(){
        var filter_group=$(this);
        var filter_title=$(this).find('.filter_title');
        var filter_group_body=$(this).find('.filter_group_body');
        $(filter_title).click(function(){
            $(filter_group).toggleClass('open');
            $(filter_group_body).slideToggle();
        });
    });


    $('.catalog_mobile_toggler').click(function(){
        $(this).toggleClass('act');
        $(this).next().slideToggle();
    });

    $('.filter_mobile_toggler').click(function(){
        $(this).toggleClass('act');
        $(this).next().slideToggle();
    });


    if($(window).innerWidth() < 1200){

        if($(".brands_slider .item").length >3){
            $('.brands_slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                infinite:false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
                    },

                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }

    }



    $('.product_main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //fade: true,
        asNavFor: '.product_slider_nav'
    });

    $('.product_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        asNavFor: '.product_main_slider',
        focusOnSelect: true
    });






    
});


