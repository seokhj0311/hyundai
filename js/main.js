$(document).ready(function () {



    $(".menu_wrap").click(function () { 
        $(".tab_menu_wrap").fadeIn(500);

        $("body").css({
            width: "100%",
            position: "fixed",
        });
    });

    $(".close_btn").click(function () { 
        $(".tab_menu_wrap").fadeOut(500);

        $("body").css({
            position: "relative"
        });
    });

    // tab_menu_wrap click event end

    var click_1 = 'on';

    $(".tab_con, .tab_more_btn").click(function () {

        if(click_1 == 'on'){
            $(".tab_sub_con").css({
                display: "block"
            });

            click_1 = "off"

        } else if(click_1 == 'off'){ 
            $(".tab_sub_con").css({
                display: "none"
            });

            click_1 = "on"
        }
    });
    // tab_menu event end

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

    var num_1 = 'on';
    var num_2 = 'on';
    var num_3 = 'on';

    $('.con_6_1').click(function(){
        if(num_1 == 'on'){

            $('.plus_6_1').css({
                transform: "rotate(45deg)",
                transition: "0.5s",
                color: "#00953B"
            });
            num_1 = 'off';
        }else if(num_1 = 'off'){

            $('.plus_6_1').css({
                transform: "rotate(0)",
                transition: "0.5s",
                color: "unset"
            });
            num_1 = 'on';
        }
    });

    $('.con_6_2').click(function(){
        if(num_1 == 'on'){

            $('.plus_6_2').css({
                transform: "rotate(45deg)",
                transition: "0.5s",
                color: "#00953B"
            });
            num_1 = 'off';
        }else if(num_1 = 'off'){

            $('.plus_6_2').css({
                transform: "rotate(0)",
                transition: "0.5s",
                color: "unset"
            });
            num_1 = 'on';
        }
    });

    $('.con_6_3').click(function(){
        if(num_1 == 'on'){

            $('.plus_6_3').css({
                transform: "rotate(45deg)",
                transition: "0.5s",
                color: "#00953B"
            });
            num_1 = 'off';
        }else if(num_1 = 'off'){

            $('.plus_6_3').css({
                transform: "rotate(0)",
                transition: "0.5s",
                color: "unset"
            });
            num_1 = 'on';
        }
    });
    // sec_6 event end

    $(".top_btn_wrap").click(function (){
        $("body, html").stop().animate({
            scrollTop: 0
        }, 1000);
    });
    // footer event end

});