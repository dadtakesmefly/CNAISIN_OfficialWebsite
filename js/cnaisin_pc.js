/**
 * Created by cnaisin06 on 2017/7/6.
 */
    //二维码
    $(".scan").on("mouseover", function () {
        $(this).css({
            "backgroundColor":"rgba(126,126,126,0.5)",
        })
        $(".scan_content").css({
            "display":"block"
        });
    })
   $(".scan").on("mouseout", function () {
       $(this).css({
           "backgroundColor":"rgba(126,126,126,1)",
       })
        $(".scan_content").css({
            "display":"none"
        });
    })

    //第一页下载
    $(".a_href_url").on("mouseover", function () {
        $(this).css({
            "backgroundColor":"#f9f1f1",
            "color":"rgba(233, 78, 61, 0.9)"
        }).find("i").css({
            "color":"rgba(233, 78, 61, 0.9)"
        })
    })
   $(".a_href_url").on("mouseout", function () {
       $(this).css({
           "backgroundColor":"white",
           "color":"#E94E3D"
       }).find("i").css({
           "color":"rgba(233, 78, 61, 1)"
       })
    })
    $(".ios").on("mouseover", function () {
    $(this).css({
        "backgroundColor":"#f9f1f1",
        "color":"rgba(233, 78, 61, 0.9)"
    }).find("i").css({
        "color":"rgba(233, 78, 61, 0.9)"
    })
    })
    $(".ios").on("mouseout", function () {
        $(this).css({
        "backgroundColor":"white",
        "color":"#E94E3D"
    }).find("i").css({
        "color":"rgba(233, 78, 61, 1)"
    })
    })

    //底部下载
    $(".foot_a_href_url").on("mouseover", function () {
        $(this).css({
            "backgroundColor":"#f9f1f1",
            "color":"rgba(92, 82, 82,0.9)"
        }).find("i").css({
            "color":"rgba(92, 82, 82,0.9)"
        })
    })
   $(".foot_a_href_url").on("mouseout", function () {
       $(this).css({
           "backgroundColor":"white",
           "color":"rgba(92, 82, 82,1)"
       }).find("i").css({
           "color":"rgba(92, 82, 82,1)"
       })
    })

   $(".foot_ios").on("mouseover", function () {
        $(this).css({
            "backgroundColor":"#f9f1f1",
            "color":"rgba(92, 82, 82,0.9)"
        }).find("i").css({
            "color":"rgba(92, 82, 82,0.9)"
        })
    })
   $(".foot_ios").on("mouseout", function () {
       $(this).css({
           "backgroundColor":"white",
           "color":"rgba(92, 82, 82,1)"
       }).find("i").css({
           "color":"rgba(92, 82, 82,1)"
       })
    })

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    speed:1000,
    mousewheelControl: true,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
        switch (swiper.activeIndex) {
            case 0:
                $(".scan").hide()
                $(".title img:nth-child(1)").attr("src","images/logo(白).png")
                $(".title img:nth-child(2)").attr("src","images/爱信公益（白）.png")
                $(".tel").css({
                    "color":"white"
                })
                setTimeout(function(){
                    $(".one_banner_five").css({
                        animation:'rotate 3s linear 0s infinite'
                    })

                },5000);
//
                break;
            case 1:
                $(".scan").fadeOut()
                $(".title img:nth-child(1)").attr("src","images/logo(红).png")
                $(".title img:nth-child(2)").attr("src","images/爱信公益（红）.png")
                $(".tel").css({
                    "color":"#5c5252"
                })
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
                $(".scan").fadeIn()
                setTimeout(function(){
                    $(".five_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".five_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })

                },4000);
                break;
            case 5:
                $(".scan").hide()
                $(".title img:nth-child(1)").attr("src","images/logo(白).png")
                $(".title img:nth-child(2)").attr("src","images/爱信公益（白）.png")
                $(".tel").css({
                    "color":"white"
                });
                break;
        }
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

        switch (swiper.activeIndex) {
            case 0:
                $(".scan").fadeOut()
                $(".title img:nth-child(1)").attr("src","images/logo(白).png")
                $(".title img:nth-child(2)").attr("src","images/爱信公益（白）.png")
                $(".tel").css({
                    "color":"white"
                })

                setTimeout(function(){
                    $(".one_banner_five").css({
                        animation:'rotate 3s linear 0s infinite'
                    })
                },5000);
                break;
            case 1:
                $(".scan").fadeIn()
                $(".tel").css({
                    "color":"#5c5252"
                })
                $(".title img:nth-child(1)").attr("src","images/logo(红).png")
                $(".title img:nth-child(2)").attr("src","images/爱信公益（红）.png")
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
                $(".scan").fadeIn()
                $(".title img:nth-child(1)").attr("src","images/logo(红).png")
                $(".title img:nth-child(2)").attr("src","images/爱信公益（红）.png")
                $(".tel").css({
                    "color":"#5c5252"
                })
                setTimeout(function(){
                    $(".five_banner_three").css({
                        animation:'updown 3s linear 0s infinite'
                    })
                    $(".five_banner_four").css({
                        animation:'downup 3s linear 0s infinite'
                    })

                },4000);
                break;
            case 5:
                $(".scan").fadeOut()
                $(".title img:nth-child(1)").attr("src","images/logo(白).png")
                $(".title img:nth-child(2)").attr("src","images/爱信公益（白）.png")
                $(".tel").css({
                    "color":"white"
                });
                break;
        }
    }
});
