$(document).ready(function(){

    var num = 0;

    setInterval(function(){

        num--;
        if(num < 0){
            num = 2;
        }

        $(".img_wrap_1").stop().animate({
            left: -450 * num
        });

    }, 2000, "swing");
    // sec_1 event end

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 50,
        initialSlide: 1,
        coverflowEffect: {
            rotate: 0,
            depth: 300,
            // modifier: 1,
            slideShadows: false,
        },
    });
    // sec_4 event end

    $(".top_btn_wrap").click(function (){
        $("body, html").stop().animate({
            scrollTop: 0
        }, 1000);
    });

});