(function ($) {
    /*tab rules*/
    function tabsActivate() {
        const widthXs = 1099;
        let newWidth = $(window).width();
        let oldWidth;
        if (newWidth !== oldWidth) {
            if (newWidth <= widthXs && (!oldWidth || oldWidth >= widthXs)) {
                $('.tab-item').removeClass('js-tab-item-activate').show();
            } else if (newWidth >= widthXs && (!oldWidth || oldWidth <= widthXs)) {
                $('.tab-item').addClass('js-tab-item-activate');
                setTimeout(function () {
                    $(".js-tab-item-activate").not(":first").hide();
                }, 10)
            }
            oldWidth = newWidth;
        }
    }

    $(document).ready(tabsActivate);
    $(window).resize(tabsActivate);

    $(".tabs .tab").click(function () {
        $(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".js-tab-item-activate").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    /*END tab rules*/
    /*tab slider*/

    let tabsSlickSlider = $('.js-tab-item-slider');
    let tabsSliderSettings = {
        dots: true,
        arrows: false,
        adaptiveHeight: true,
    };
    $(document).ready(function () {
        let winWidth = $(window).width();
        if (winWidth < 1100) {
            tabsSlickSlider.slick(tabsSliderSettings);
        }
    });

    // reslick only if it's not slick()
    $(window).on('resize', function () {
        let winWidth = $(window).width();

        if (winWidth >= 1100) {
            if (tabsSlickSlider.hasClass('slick-initialized')) {
                tabsSlickSlider.slick('unslick');
            }
            return
        }

        if (!tabsSlickSlider.hasClass('slick-initialized')) {
            return tabsSlickSlider.slick(tabsSliderSettings);
        }
    });
    /*END tab slider*/
    /*dynamic date rules*/
    $(document).ready(function () {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let today = new Date();
        let todayMonth = months[today.getMonth()];
        let startDate = new Date(today);
        let startMonth = months[startDate.getMonth()];

        $('.today .month').text(todayMonth);
        $('.today .day').text(today.getDate());
        startDate.setDate(startDate.getDate() + 21);
        $('.start .month').text(startMonth);
        $('.start .day').text(startDate.getDate());
    });

    /*END dynamic date rules*/

    /*sticky block V2*/
    let sectionPosition;
    let stickySectionPosition;
    let stickySectionHeight;
    let object;
    let objectClone;

    function sectionPositionInit() {
        object = $('.startup-build-team-content');
        stickySectionHeight = object.height();
        sectionPosition = $('.startup-how-we-work-1').offset().top;
        stickySectionPosition = $('.startup-build-team').offset().top;
        object.addClass('original').clone().insertAfter(object).addClass('cloned').css({
            "visibility": "hidden",
        }).removeClass('original');
        objectClone = $('.startup-build-team-content.cloned');
    }

    $(document).ready(function () {
        sectionPositionInit();
    });

    function positionUpdate() {
        stickySectionHeight = object.height();
        sectionPosition = $('.startup-how-we-work-1').offset().top;
        stickySectionPosition = $('.startup-build-team').offset().top;
    }

    $(window).resize(positionUpdate);
    $(window).on('scroll', function () {
        let windowScroll = $(this).scrollTop(),
            windowHeight = $(this).height();
        if (windowScroll >= (sectionPosition - windowHeight / 2) && windowScroll < ((stickySectionPosition + stickySectionHeight + 79) - windowHeight)) {
            object.slideDown(300);
            object.css({
                "position": "fixed",
                "bottom": "0",
                "left": "0",
                "background-color": "rgba(244, 212, 0, 0.9)",
            });

        } else {
            if (windowScroll >= ((stickySectionPosition + stickySectionHeight + 79) - windowHeight)) {
                object.css({
                    "display": "block",
                    "position": "absolute",
                    "z-index": "1",
                    "background-color": "#f4d400",
                });

            }
            else {
                object.slideUp(300);
            }
        }
    });
    /*END sticky block V2*/

    /*move block*/

    function moveBlock() {
        const widthXs = 1100;
        let newWidth = $(window).width();
        let oldWidth;

        if (newWidth !== oldWidth) {

            if (newWidth < widthXs && (!oldWidth || oldWidth >= widthXs)) {
                $('.table-head').prependTo('.table-footer');
                $('.table-get-info').insertAfter('.startup-save-time__table');
            } else if (newWidth >= widthXs && (!oldWidth || oldWidth < widthXs)) {
                $('.table-head').prependTo('.startup-save-time__table');
                $('.table-get-info').appendTo('.table-footer-content--2');
            }

            oldWidth = newWidth;
        }
    }

    $(document).ready(moveBlock);
    $(window).resize(moveBlock);

    /*END move block*/
    /*responsive table rules*/
    let tableTopPosition;
    let tableContentScroll;
    $(document).ready(function () {
        tableTopPosition = $('.js-table-fixed').offset().top;
        console.log(tableTopPosition);

    });
    $(window).on('scroll', function () {
        let windowScroll = $(this).scrollTop();
        let tableContent = document.querySelector(".row-wrapper");
        let tableContentScroll = $('.row-wrapper').scrollTop();
        let tableContentHeight = tableContent.scrollHeight;
        let tableContentViewPortHeight = tableContent.clientHeight;
        let tableContentScrollingAll = tableContentHeight - tableContentScroll === tableContentViewPortHeight;
        let table = $('.js-table-fixed');
        if (windowScroll >= tableTopPosition) {
            table.addClass('fixed');
            if ((windowScroll >= tableTopPosition) && (tableContentScrollingAll)) {
                table.removeClass('fixed');
            }
        }
        else {
            table.removeClass('fixed');
        }
    });

    $('.row-wrapper').on('scroll', function () {
        tableContentScroll = $('.row-wrapper').scrollTop();
    });
    /*end responsive table rules*/
    /*upload position update*/
    (function () {
        let count = 0;

        (function f() {
            if (typeof object !== 'undefined') {
                positionUpdate();
            }

            if (++count <= 5) {
                setTimeout(f, 1000)
            }
        }());
    }());
    /*END upload position update*/
    $(document).ready(function () {
        $('.get-in-touch').on('click', function (e) {
            e.preventDefault();
            $('#modal-overlay').fadeIn(300);
        });

        $('#modal .close-button').on('click', function () {
            $('#modal-overlay').fadeOut(300);
        });

        $('#modal-overlay').on('click', function (e) {
            if ($(e.target).is('#modal-overlay')) {
                $(this).fadeOut(300);
            }
        });
    });
})(jQuery);
