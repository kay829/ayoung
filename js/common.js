$(document).ready(function(){
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
        menu: '#mymenu',
            afterLoad: function(origin, destination, direction, trigger){
                if(destination.index == 0){
                    $('#mymenu').stop().fadeOut(0);
                }else{
                    $('#mymenu').stop().fadeIn(0);
                }
                if(destination.index == 4){
                    $('footer').addClass('active');
                }
                },
                onLeave: function(origin, destination, direction, trigger){
                $('footer').removeClass('active');
                }
            });

});

$(document).ready(function(){
/*     var swiper = new Swiper("#portfolio .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        pagination: {
          el: "#portfolio .swiper-pagination",
          clickable: true,
        },
        loop:true,
        centeredSlides: true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides:false,
            navigation: {
                nextEl: "#portfolio .swiper-button-next",
                prevEl: "#portfolio .swiper-button-prev",
              },
          },
        },
      }); */

      var swiper = new Swiper("#portfolio .swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: "#portfolio .swiper-pagination",
        },
      });
});

