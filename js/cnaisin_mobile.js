/**
 * Created by cnaisin06 on 2017/7/10.
 */
/**
 * Created by cnaisin06 on 2017/7/6.
 */
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    speed:1000,
//        loop:true,
    mousewheelControl: true,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
        switch (swiper.realIndex) {
            case 1:
                setTimeout(function(){
                    $(".two_banner").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".two_banner_one").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_two ").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_three").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_four").css({
                        animation:'jumps 4s ease 0s infinite'
                    })

                },4000);
                break;
            case 2:
                setTimeout(function(){
                    $(".three_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".three_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })

                },3500);
                break;
                window.addEventListener('load', init(60));
            case 3:
                setTimeout(function(){
                    $(".four_banner").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".four_banner_one").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".four_banner_two").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".four_banner_three").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                },4500);
                break;
            case 4:
                setTimeout(function(){
                    $(".five_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".five_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })

                },4000);
                break;

        }
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

        switch (swiper.realIndex) {
            case 1:
                setTimeout(function(){
                    $(".two_banner").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".two_banner_one").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_two ").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_three").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".two_banner_four").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                },4000);
                break;
            case 2:
                setTimeout(function(){
                    $(".three_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".three_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })
                },3500);
                break;
            case 3:
                setTimeout(function(){
                    $(".four_banner").css({
                        animation:'jump 4s ease 0s infinite'
                    })
                    $(".four_banner_one").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".four_banner_two").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                    $(".four_banner_three").css({
                        animation:'jumps 4s ease 0s infinite'
                    })
                },4500);
                break;
            case 4:
                setTimeout(function(){
                    $(".five_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".five_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })

                },4000);
                break;
        }

    }

});