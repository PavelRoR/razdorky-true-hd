//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
// @prepros-prepend flipclock.min.js 

$(document).ready(function () {
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    // План
    (function ($) {
        jQuery.fn.lightTabs3 = function (options) {

            var createTabs3 = function () {
                let tabs3 = this,
                    i = 0,

                    showPage3 = function (i) {
                        $(tabs3).children("div").children("div").hide();
                        $(tabs3).children("div").children("div").eq(i).show();
                        $(tabs3).children("ul").children("li").removeClass("active-3");
                        $(tabs3).children("ul").children("li").eq(i).addClass("active-3");
                    };
                showPage3(0);
                $(tabs3).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page3", i);
                    i++;
                });
                $(tabs3).children("ul").children("li").click(function () {
                    showPage3(parseInt($(this).attr("data-page3")));
                });
            };
            return this.each(createTabs3);
        };
    })(jQuery);

    $("#lessons").lightTabs3();

    // Записи
    (function ($) {
        jQuery.fn.lightTabs = function (options) {

            var createTabs = function () {
                let tabs = this,
                    i = 0,

                    showPage = function (i) {
                        $(tabs).children("div").children("div").hide();
                        $(tabs).children("div").children("div").eq(i).show();
                        $(tabs).children("ul").children("li").removeClass("active-");
                        $(tabs).children("ul").children("li").eq(i).addClass("active");
                    };
                showPage(0);
                $(tabs).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page", i);
                    i++;
                });
                $(tabs).children("ul").children("li").click(function () {
                    showPage(parseInt($(this).attr("data-page")));
                });
            };
            return this.each(createTabs);
        };
    })(jQuery);
    $("#recs").lightTabs();

    /* Таймер */
    var clock;
    var futureDate = new Date("October 4, 2019 03:00 AM UTC+3");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.clock').addClass('twoDayDigits');
    } else {
        $('.clock').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
        // $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3935&clean=true&lg=ru');
        // $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3938&clean=true&lg=ru');
        // $('.cost-full span').css('textDecoration', 'none');
        // $('.timer, .cost-sale, .cost-today, .prepayment').remove();
    }
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'ru',
        callbacks: {
            stop: function () {
                // $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3935&clean=true&lg=ru');
                // $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3938&clean=true&lg=ru');
                // $('.cost-full span').css('textDecoration', 'none');
                // $('.timer, .cost-sale, .cost-today, .prepayment').remove();
            }
        },
    });


    /*Конец документа*/
});