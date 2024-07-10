<script src="js/jquery.min.js"></script>

$(function () {
    let count = 1;
    let textcount = 1;
    let change;

    $('body').fadeIn(1000);

    $('.gnb > ul > li:nth-child(3)').on('mouseover', function () {
        const subMenuItems = $('.gnb>ul>li:nth-child(3) div > ul > li');
        subMenuItems.css('display', 'block').each(function (index) {
            $(this).delay(index * 200).animate({
                'opacity': '1',
                'margin-top': '0'
            }, 500); // 애니메이션 시간 변경
        });
        $('.gnb div.Shop_item').fadeIn(); // 서브 메뉴 보이기
    });

    $('.gnb > ul > li:nth-child(3)').on('mouseleave', function () {
        const subMenuItems = $('.gnb>ul>li:nth-child(3) div > ul > li');
        subMenuItems.stop(true, true).each(function (index) {
            $(this).delay(index * 200).animate({
                'opacity': '0',
                'margin-top': '10px'
            }, 500, function () {
                $(this).css('display', 'none');
            });
        });
        $('.gnb div.Shop_item').fadeOut(); // 서브 메뉴 숨기기
    });
    $('.gnb > ul > li:nth-child(4)').on('mouseover', function () {
        const subMenuItems = $('.gnb>ul>li:nth-child(4) div > ul > li');
        subMenuItems.css('display', 'block').each(function (index) {
            $(this).delay(index * 100).animate({
                'opacity': '1',
                'margin-top': '0'
            }, 500); // 애니메이션 시간 변경
        });
        $('.gnb div.Community_item').fadeIn(); // 서브 메뉴 보이기
    });

    $('.gnb > ul > li:nth-child(4)').on('mouseleave', function () {
        const subMenuItems = $('.gnb>ul>li:nth-child(4) div > ul > li');
        subMenuItems.stop(true, true).each(function (index) {
            $(this).delay(index * 100).animate({
                'opacity': '0',
                'margin-top': '10px'
            }, 500, function () {
                $(this).css('display', 'none');
            });
        });
        $('.gnb div.Community_item').fadeOut(); // 서브 메뉴 숨기기
    });
});

function textUp() {
    $('#textshow>span').remove();
    let text = $('#textZone>p.active').text();
    const textArr = [...text];
    for (let i = 0; i <= textArr.length; i++) {
        if (textArr[i] == ' ') {
            textArr[i] = '&nbsp';
        }
        if (i < textArr.length) {
            $('#textshow').append('<span>' + String(textArr[i]) + '</span>');
            $('#textshow>span:nth-child(' + (i + 1) + ')').delay(i * 100).animate({
                'opacity': '1',
                'margin-top': '10px'
            }, 500)
        } else {
            $('#textshow>span:nth-child(' + (i + 1) + ')').delay(i * 100).animate({
                'opacity': '1',
                'margin-top': '10px'
            }, 500)
        }
    }
}
function imgChange() {
    $('#controlZone>a').eq(2).removeClass('active')
    count++;
    $('#contentsZone').prepend(`<img src="./Images/img${count}.jpg">`)
    $('#contentsZone>img:last').fadeOut(700, function () {
        $('#contentsZone>img:last').remove();
    });
    $('#controlZone>a').removeClass('active')
    $('#controlZone>a').eq(count - 1).addClass('active')
    if (count > 2) {

        count = 0;
    }
    $('#textZone>p.active').css({
        'opacity': '0',
        'top': '48%'
    });
    $(`#textZone>p:nth-child(${textcount})`).removeClass('active');
    textcount++;
    if (textcount == 4) {
        textcount = 1;
    }
    $(`#textZone>p:nth-child(${textcount})`).addClass('active');
    textUp();
}
textUp();
change = setInterval(imgChange, 4000);
$('#controlZone>a').on('click', function () {
    clearInterval(change);
    let imgAddr = $(this).attr('href');
    let textdata = parseInt($(this).attr('data'));
    $('#contentsZone').prepend(`<img src="${imgAddr}">`)
    $('#contentsZone>img:last').fadeOut(700, function () {
        $('#contentsZone>img:last').remove();
    });
    $('#controlZone>a').removeClass('active');
    $(this).addClass('active')
    count = parseInt($(this).attr('data'));
    if (count > 2) {
        count = 0;
    }
    $('#textZone>p.active').css({
        'opacity': '0',
        'top': '48%'
    });
    $(`#textZone>p`).removeClass('active');
    $(`#textZone>p:nth-child(${textdata})`).addClass('active');
    textUp();
    change = setInterval(imgChange, 4000);
    return false;
});