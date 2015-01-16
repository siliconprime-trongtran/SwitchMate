$(function() {
    $('.play-video').magnificPopup({
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/sQQOfmYIzUA?rel=0&showinfo=0&autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        },
        type: 'iframe'
    });
});

$(function () {
    var flag = 0;
    $(document).scroll(function (e) {
        var m = $('.height-top').position().top;
        var heightCustom = m - $('.content-height').outerHeight() - 80;
        var y = $(this).scrollTop();
        if (y >= heightCustom - 100) {
            $('.hide-item-4').hide();
            $('.hide-item').removeClass('show');
            $('#step-2').addClass("show");
            if (y >= heightCustom) {
                $('.hide-item-4').hide();
                $('.hide-item').removeClass('show');
                $('#step-3').addClass("show");
                if (y >= heightCustom + 100) {
                    $('.hide-item').removeClass('show');
                    $('#step-4').addClass("show");
                }
            }
        } else {
            $('.hide-item').hide();
            $('.hide-item').removeClass('show');
            $('#step-1').addClass("show");
        }

    });
    $(document).scroll(function (e) {
        var m = $('.container-content-4').position().top;
        var heightCustom = m - 80;
        var y = $(this).scrollTop();
        $('.container-content-4').addClass('image');
        if (flag == 0 && y >= heightCustom - 200) {
            $('.container-content-4').removeClass('hover');
            flag = 1;
        }
        
    });

    $('.button-toggle').click(function (e) {
        e.stopPropagation();
        if ($('.container-content-4').hasClass('hover')) {
            $('.container-content-4').removeClass('hover');
        } else {
            $('.container-content-4').addClass('hover');
        }
        
        
    });
});