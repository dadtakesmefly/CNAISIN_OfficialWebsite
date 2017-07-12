# CNAISIN_OfficialWebsite
全屏滚动、H5动画
## 使用swiper.animate时，给一个对象添加两个动画且动画循环的方法
### swiper官网上给对象加一个动画的方法是   
           
     <div class="swiper-slide">
          <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容</p>
     </div>

### 出场动画结束后，定时器开启第二个动画
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
                   //activeIndex 当前活动块的索引，从0开始，
                   //realIndex当前活动块的索引，与activeIndex不同的是，在loop模式下不会将复制的块的数量计算在内。
                   switch (swiper.activeIndex) {
                       case 0:
                           setTimeout(function(){
                               $(".one_banner_five").css({
                                   animation:'rotate 3s linear 0s infinite'
                               })
                           },5000);
                           break;
                   }
               },
               onSlideChangeEnd: function(swiper){
                   swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                   switch (swiper.activeIndex) {
                       case 0:
                           setTimeout(function(){
                               $(".one_banner_five").css({
                                   animation:'rotate 3s linear 0s infinite'
                               })
                           },5000);
                           break;
                   }
               }
           });


## 移动端下滑箭头动画

           .container {
            position: absolute;
            width: 24px;
            height: 24px;
            left: 50%;
            bottom: -20px;
            margin-left: -12px;
          }
          .chevron {
            position: absolute;
            width: 28px;
            height: 1px;

            opacity: 0;
            transform: scale3d(0.5, 0.5, 0.5);
            animation: move 3s linear 0.5s infinite;
          }
          .chevron:first-child {
            animation: move 3s linear 1.5s infinite;
          }
          .chevron:nth-child(2) {
            animation: move 3s linear 2.5s infinite;
          }
          .chevron:before,
          .chevron:after {
            content: ' ';
            position: absolute;
            top: 0;
            height: 100%;
            width: 51%;
            background:#ccc;
          }
          .chevron:before {
            left: 0;
            transform: skew(0deg, -30deg);
          }

          .chevron:after {
            right: 0;
            width: 50%;
            transform: skew(0deg, 30deg);
          }
          @keyframes move {
            0% {
              opacity: 1;

            }
            33% {
              opacity: 1;
              transform: translateY(-30px);
            }
            66% {
              opacity: 1;
              transform: translateY(-40px);
            }
            100% {
              opacity: 0;
              transform: translateY(-55px) ;
            }
          }
         
