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

