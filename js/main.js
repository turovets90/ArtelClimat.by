$(document).ready(function(){

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




/*
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


        $('.main_menu .arrow').click(function(){
            $(this).toggleClass('rotate');
            $(this).next().slideToggle();
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


    $('.ms_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });

    $('.ms_next').click(function(){
        $('.main_slider').slick('slickNext');
    });



    if($(".categories_slider .slider_item").length >6){
        $('.categories_slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            infinite:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },

                {
                    breakpoint: 575,
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


    $('.filter_item').each(function(){
        var filter_head=$(this).find('.filter_head');
        var filter_body=$(this).find('.filter_body');
        var filter_item=$(this);
        $(filter_head).click(function(){
            $('.filter_item').removeClass('b_0 active');
            $('.filter_body').slideUp();
            if($(filter_body).is(':visible')){
                $(filter_body).slideUp();
                $(filter_item).removeClass('active');
                $(filter_item).prev().removeClass('b_0');
            }else{
                $(filter_body).slideDown();
                $(filter_item).addClass('active');
                $(filter_item).prev().addClass('b_0');
            }
        });
    });


    var news_grid=$('.news_grid');
    if(news_grid){
        $(news_grid).masonry({
            itemSelector: '.grid-item',
        });
    }


    */




    
});


