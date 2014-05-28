$(document).ready(function() {
    var galleryImg = $('.images'),
         arrows = $('.arrows'),
         nav = $('header nav'),
         header = $('header'),
         slide = $('.gallery'),
         thumbsLink = $('.thumbsLink'),
         thumbnails = $('.thumbs .images'),
         back = $('.backwardImage'),
         forward = $('.forwardImage'),
         thumbGallery = $('.thumbs');

    $(nav).mouseenter(function(){
        $(header).addClass('hovered');
        $(header).stop().animate({
            'height' : '690px'
        })
    });

    $(header).mouseleave(function() {
        $(header).removeClass('hovered');
        $(header).stop().animate({
            'height' : '105px'
        }, 300);
    });

    $(thumbsLink).click(function() {
        var that = $(this),
              thisId = $(that).attr('id'),
              slideImage = $('.gallery .images');

        if ( thisId === 'hidden' ) {
            $(slide).add(arrows).fadeOut('fast', function() {
                $(thumbGallery).fadeIn('fast');
                $(that).attr('id', 'shown');
                $(that).html('Gallery');
                $(slideImage).hide(0);
            });
        } else {
            $(thumbGallery).fadeOut('fast', function() {
                $(slide).add(arrows).fadeIn('fast');
                $(that).attr('id', 'hidden');
                $(that).html('Thumbnails');
                $('.first').show();
            });
        }
        return false;
    });

    $(thumbnails).click(function() {
        var that = $(this),
              img = $(that).children('img').attr('src'),
              showImg = $(slide).find('img[src="' + img + '"]'),
              currentImg = $('.current');
        $(currentImg).removeClass('current');
        $(showImg).parent().addClass('current');
        $(showImg).parent().show(0);
        $(arrows).removeClass('grey');
        if ( $(showImg).parent().hasClass('first') ) {
            $(back).addClass('grey');
        } else if ( $(showImg).parent().hasClass('last') ) {
            $(forward).addClass('grey');
        }
        $(thumbGallery).fadeOut('fast', function() {
            $(slide).add(arrows).fadeIn('fast');
            $(thumbsLink).attr('id', 'hidden');
            $(thumbsLink).html('Thumbnails');
        });
    });

    $(arrows).click(function() {
        var that = $(this),
             currentImg = $('.current'),
             nextImg = currentImg.next('.images'),
             prevImg = currentImg.prev('.images');

        if ( that.hasClass('grey') ) {
            return;
        }

        currentImg.fadeOut('fast', function() {
            currentImg.removeClass('current');
            if ( that.hasClass('backwardImage') ) {
                arrows.removeClass('grey');
                prevImg.fadeIn('fast');
                prevImg.addClass('current');
                if ( prevImg.hasClass('first') ) {
                    back.addClass('grey');
                }
            } else {
                arrows.removeClass('grey');
                nextImg.fadeIn('fast');
                nextImg.addClass('current');
                if ( nextImg.hasClass('last') ) {
                    forward.addClass('grey');
                }
            }
        });
    });

    if ($('.images').hasClass('active')) {
        $('.gallery li').fancybox({
            openEffect  : 'none',
            closeEffect : 'none'
        });
    }

    var images = [];
    function preload() {
        for ( i = 0; i < preload.arguments.length; i++ ) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
        }
    };

     preload(
        'http://caseyocook.com/img/large/Cook_Paper-Face_2012.jpg',
        'http://caseyocook.com/img/large/COOK_Le-Silent-Entertainer_2012.jpg',
        'http://caseyocook.com/img/large/Cook_The-Blue,-Blue-window_2012.jpg',
        'http://caseyocook.com/img/large/Cook_Confidante_2012.jpg',
        'http://caseyocook.com/img/large/COOK_Knives-on-the-Beach_2012.jpg',
        'http://caseyocook.com/img/large/COOK_I-Dare-You,-How-Dare-You_2011-(2).jpg',
        'http://caseyocook.com/img/large/cook_mashing-up-the-clouds_2010.jpg',
        'http://caseyocook.com/img/large/COOK_Marcel_2010.jpg',
        'http://caseyocook.com/img/large/COOK_The-Rubber-Band-Room_2010.jpg',
        'http://caseyocook.com/img/large/COOK_Open-Your-Mouth_2010.jpg',
        'http://caseyocook.com/img/large/COOK_Warrior-Warning_2010.jpg',
        'http://caseyocook.com/img/large/COOK_Whiplash-Smile_2010.jpg',
        'http://caseyocook.com/img/large/04-Cook_Boom-Bomb-Crash--CI.jpg',
        'http://caseyocook.com/img/large/cook_now-youve-got-the-chills_2008.jpg',
        'http://caseyocook.com/img/large/01img.jpg',
        'http://caseyocook.com/img/large/02img.jpg',
        'http://caseyocook.com/img/large/03img.jpg',
        'http://caseyocook.com/img/large/04img.jpg',
        'http://caseyocook.com/img/large/05img.jpg',
        'http://caseyocook.com/img/large/06img.jpg',
        'http://caseyocook.com/img/large/07img.jpg',
        'http://caseyocook.com/img/large/08img.jpg',
        'http://caseyocook.com/img/large/09img.jpg',
        'http://caseyocook.com/img/large/10img.jpg',
        'http://caseyocook.com/img/large/11img.jpg',
        'http://caseyocook.com/img/large/12img.jpg',
        'http://caseyocook.com/img/large/13img.jpg',
        'http://caseyocook.com/img/large/14img.jpg',
        'http://caseyocook.com/img/large/15img.jpg',
        'http://caseyocook.com/img/large/16img.jpg',
        'http://caseyocook.com/img/large/17img.jpg',
        'http://caseyocook.com/img/large/Cook-Casey-7.jpg'
     );

});
