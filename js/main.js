$(document).ready(function () {
    barInit();
    changeNavbar();
    changeSizeHandler();
    rotateIcon();
});

function barInit() {
    if (($(window).width() >= 768) && ($(window).scrollTop() > 0)) {
        //        console.log($(window).scrollTop());
        //        $('.navbar-default').css({
        //            'background-color': 'rgba(14,216,214, 0.5)'
        //        });
    }
}

function changeNavbar() {
    $(window).scroll(function () {
        if ($(window).width() >= 768) {

            if ($(window).scrollTop() > 0) {
                $('.navbar-default').css({
                    'background-color': 'rgba(14,216,214, 0.5)'
                })
            } else {
                $('.navbar-default').removeAttr('style');
            }
        }
    })
}

function changeSizeHandler() {

    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.navbar-default').removeAttr('style');
        } else if ($(window).scrollTop() > 0) {
            $('.navbar-default').css({
                'background-color': 'rgba(14,216,214, 0.5)'
            })
        }
    })

}

function rotateIcon () {
    $('#services .fa').on({
        'mouseenter': function (){
           $(this).css('transform','rotate(360deg)');
        },
        'mouseleave': function (){
            $(this).css('transform','rotate(0deg)');
        }
    })
}
