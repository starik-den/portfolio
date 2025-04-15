;(function ($) {
    // $('#site-map a').on('click', function (event) {
    //     event.preventDefault();
    //     $('.html5-video-player').click();
    // });
    $(document).ready(function () {
        var am = $('#hp-article__slider').children().length;
        var slidesAmount;
        switch (am) {
            case 2:
                slidesAmount = 1;
                break;
            case 3:
                slidesAmount = 2;
                break;
            default:
                slidesAmount = 3;
        }
        // console.log(slidesAmount);
        // poster content slider
        $('.pc__slider').slick({
            arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
        });
        // poster content slider
        //articles slider
        $('#hp-article__slider').slick({
            slidesToShow: slidesAmount,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1020,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
        //articles slider
        //sidebar slider
        $('#sidebar-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1315,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
        //sidebar slider
    });

    //move header menu items

    function moveMenuItem() {
        var controlWidth = ($('.header').width());
        if (controlWidth <= 1200) {
            $('#mobile-menu').append($('.header__menu li.item7'))
        }
        else {
            $('.header__menu li.item7').insertAfter($('.header__menu li.item6'));
        }
        if (controlWidth <= 1130) {
            $('.header__menu li.item6').insertBefore($('.header__menu li.item7'));
        }
        else {
            $('.header__menu li.item6').insertAfter($('.header__menu li.item5'));
        }
        if (controlWidth <= 970) {
            $('.header__menu li.item5').insertBefore($('.header__menu li.item6'));
        }
        else {
            $('.header__menu li.item5').insertAfter($('.header__menu li.item4'));
        }
        if (controlWidth <= 755) {
            $('.header__menu li.item4').insertBefore($('.header__menu li.item5'));
        }
        else {
            $('.header__menu li.item4').insertAfter($('.header__menu li.item3'));
        }
        if (controlWidth <= 620) {
            $('.header__menu li.item3').insertBefore($('.header__menu li.item4'));
        }
        else {
            $('.header__menu li.item3').insertAfter($('.header__menu li.item2'));
        }
    }

    $(document).ready(moveMenuItem);
    $(window).resize(moveMenuItem);

    //move header menu items
    //mobile menu
    $('li.mobile-menu').on('click', function () {
        $('div.mob-dropdown-menu').slideToggle(300)
    });
    //mobile menu
    //tell parsing
    $(document).ready(function () {
        var a = parseInt($('#tell-link').text().replace(/\D+/g, ""));
        var b = $('#email-link').text();
        // console.log(a);
        $('#tell-link').attr("href", "tel:+" + a);
        $('#email-link').attr("href", "mailto:" + b);
    });
    //tell parsing
    //color menu
    $(document).ready(function () {
        var c = $('.header__menu .menu-wrapper ul');
        c.find($("a[href='#']")).toggleClass('gold');
    });
    //color menu
    //move certificate
    function moveCertificate() {
        var controlWidth = ($('.header').width());
        if (controlWidth <= 1024) {
            $('div.certificate-wrapper').insertAfter($('div.interesting'))
        }
        else {
            $('div.certificate-wrapper').insertAfter($('div.bread-crumbs'))
        }
    }

    $(document).ready(moveCertificate);
    $(window).resize(moveCertificate);
    //move certificate
    //move product
    // function moveProduct() {
    //     var controlWidth = ($('.header').width());
    //     if (controlWidth <= 425) {
    //         $('div.certificate-wrapper').insertAfter($('div.interesting'))
    //     }
    //     else {
    //         $('div.certificate-wrapper').insertAfter($('div.bread-crumbs'))
    //     }
    // }
    //
    // $(document).ready(moveProduct);
    // $(window).resize(moveProduct);
    //move product
    // move event
    function moveEvent() {
        var controlWidth = ($('.header').width());
        if (controlWidth <= 425) {
            $('.event2-main__content div.pr-item__prev').insertAfter($('.event2-main__content div.pr-item__description h3'))
        }
        else {
            $('.event2-main__content div.pr-item__prev').insertBefore($('.event2-main__content div.pr-item__description'))
        }
    }

    $(document).ready(moveEvent);
    $(window).resize(moveEvent);
    //move event
//***************pop-up*********************
//****************************come-in
    $('a#come-in').on('click', function (event) {
        event.preventDefault();
        $('.pop-up.come-in').addClass('active');
    });
    $('.pop-up__close').on('click', function () {
        $(this).closest($('.pop-up').removeClass('active'));
    });
//*******************************reg-1
    $('a#reg').on('click', function (event) {
        event.preventDefault();
        $('.pop-up.reg-1').addClass('active');
    });
    $('.pop-up__close').on('click', function () {
        $(this).closest($('.pop-up').removeClass('active'));
    });
//******************отслеживание вводимого имени
    $('#reg-user-name').on('change', function () {
        var uName = ($(this).val());
        // console.log(uName);
        $('#current-user').text(uName);
    });
//*****************reg-2
    $(document).ready(function () {
        $.validator.addMethod("realname", function (value, element) {
            return this.optional(element) || /^[а-яё, a-z]+$/i.test(value);
        }, "Ведите свое имя без цифр");
        $('#form-reg').validate({
                rules: {
                    confirm_user_email: {
                        required: true,
                        email: true
                    },
                    confirm_user_name: {
                        required: true,
                        realname: true
                    }
                },
                messages: {
                    confirm_user_email: {
                        required: "поле обязательно для заполнения",
                        email: "E-mail должен содержать '@' и точку"
                    },
                    confirm_user_name: {
                        required: "поле обязательно для заполнения",

                    }
                },
                submitHandler: function (form) {
                    $.ajax({
                        type: "get",
                        // url: "mail.php",
                        data: $(form).serialize(),
                        success: function () {

                            $(this).closest($('.pop-up').removeClass('active'));
                            $('.pop-up.reg-2').addClass('active');
                            setTimeout(function () {
                                // Done Functions
                                th.trigger("reset");
                            }, 1000);
                        }
                    })
                }
            }
        );
    });
//***********************video
    $('a#look-video').on('click', function (event) {
        event.preventDefault();
        $('.pop-up.video').addClass('active');
    });
    $('.pop-up__close').on('click', function () {
        $(this).closest($('.pop-up').removeClass('active'));
    });
//***************************get-free-1
    $('a#get-free').on('click', function (event) {
        event.preventDefault();
        $('.pop-up.get-free-1').addClass('active');
    });
    $('.pop-up__close').on('click', function () {
        $(this).closest($('.pop-up').removeClass('active'));
    });
//***************************get-free-2
    $(document).ready(function () {
        $.validator.addMethod("realname", function (value, element) {
            return this.optional(element) || /^[а-яё, a-z]+$/i.test(value);
        }, "Ведите свое имя без цифр");
        $('#form-get-free').validate({
                rules: {
                    get_free_user_email: {
                        required: true,
                        email: true
                    },
                    get_free_user_name: {
                        required: true,
                        realname: true
                    }
                },
                messages: {
                    get_free_user_email: {
                        required: "поле обязательно для заполнения",
                        email: "E-mail должен содержать '@' и точку"
                    },
                    get_free_user_name: {
                        required: "поле обязательно для заполнения",

                    }
                },
                submitHandler: function (form) {
                    $.ajax({
                        type: "get",
                        // url: "mail.php",
                        data: $(form).serialize(),
                        success: function () {

                            $(this).closest($('.pop-up').removeClass('active'));
                            $('.pop-up.get-free-2').addClass('active');
                            setTimeout(function () {
                                // Done Functions
                                th.trigger("reset");
                            }, 1000);
                        }
                    })
                }
            }
        );
    });


    //********************************************************
    // $("#form-get-free").submit(function () { //Change
    //     var th = $(this);
    //     $.ajax({
    //         type: "get",
    //         // url: "mail.php", //Change
    //         data: th.serialize()
    //     }).done(function () {
    //         th.closest($('.pop-up').removeClass('active'));
    //         $('.pop-up.get-free-2').addClass('active');
    //         setTimeout(function () {
    //             // Done Functions
    //             th.trigger("reset");
    //         }, 1000);
    //     });
    //     return false;
    // });
//*********************big-certificate
    $('a.single_image').on('click', function (event) {
        event.preventDefault();
        var content = $(this).attr("href");
        console.log(content);
        $('.pop-up.big-certificate .pop-up__img img').attr("src", content);
        $('.pop-up.big-certificate').addClass('active');
    });
    $('.pop-up__close').on('click', function () {
        $(this).closest($('.pop-up').removeClass('active'));
    });
//**********************add to cart
    $('a.btn-add-to-cart').on('click', function (event) {
        event.preventDefault();
        $('.pop-up.add-to-cart').addClass('active');
    });
    $('.pop-up__close').on('click', function () {
        $(this).closest($('.pop-up').removeClass('active'));
    });
//*************pop-ups******************
//***********validator****************
    $(document).ready(function () {
        $.validator.addMethod("realname", function (value, element) {
            return this.optional(element) || /^[а-яё, a-z]+$/i.test(value);
        }, "Ведите свое имя без цифр");
        $("#general-form").validate({

            rules: {

                userEmail: {
                    required: true,
                    email: true
                },
                userName: {
                    required: true,
                    realname: true
                }
            },
            messages: {

                userEmail: {
                    required: "поле обязательно для заполнения",
                    email: "E-mail должен содержать '@' и точку"
                },

                userName: {
                    required: "поле обязательно для заполнения",
                },

            }
        });
        $('.pop-up__form').validate({

            rules: {

                confirm_user_email: {
                    required: true,
                    email: true
                },
            },
            messages: {

                confirm_user_email: {
                    required: "поле обязательно для заполнения",
                    email: "E-mail должен содержать '@' и точку"
                },
            }
        });
    });

})(jQuery);