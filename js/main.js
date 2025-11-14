$(document).ready(function () {

    menuNum = 0;

    $(".menu_wrap").click(function () {
        if (menuNum === 0) {
            $(".tab_menu_wrap, .hamburger").fadeIn(500).addClass("active");

            $("body").css({
                width: "100%",
                position: "fixed",
            });
            
            menuNum++;
        } else if (menuNum === 1) {
            $(".tab_menu_wrap").fadeOut(500).removeClass("active");
            $(".hamburger").removeClass("active");

            $("body").css({
                position: "relative"
            });

            menuNum--; 
        }
    });

    // $(".close_btn").click(function () { 
    //     $(".tab_menu_wrap").fadeOut(500);

    //     $("body").css({
    //         position: "relative"
    //     });
    // });
    
    // $(".menu_wrap").click(function () { 
    //     $(".tab_menu_wrap").fadeIn(500);

    //     $("body").css({
    //         width: "100%",
    //         position: "fixed",
    //     });
    // });

    // $(".close_btn").click(function () { 
    //     $(".tab_menu_wrap").fadeOut(500);

    //     $("body").css({
    //         position: "relative"
    //     });
    // });

    // tab_menu_wrap click event end

    // var click_1 = 'on';

    // $(".tab_con, .tab_more_con").click(function () {

    //     if(click_1 == 'on'){
    //         $(".tab_sub_con").css({
    //             display: "block"
    //         });

    //         click_1 = "off"

    //     } else if(click_1 == 'off'){ 
    //         $(".tab_sub_con").css({
    //             display: "none"
    //         });

    //         click_1 = "on"
    //     }
    // });
    // tab_menu event end
    
    // var tabNum_1 = 0;
    
    // $(".tab_con_1").click(function () { 
    //     console.log("컨텐츠1");
    //     if (tabNum_1 === 0) {
    //         $(".tab_sub_con_1").css({
    //             display: "block"
    //         });

    //         tabNum_1++;
    //     } else if (tabNum_1 === 1) { 
    //         $(".tab_sub_con_1").css({
    //             display: "none"
    //         });
    //         tabNum_1--;
    //     }
    // });

    // var tabNum_2 = 0;
    
    // $(".tab_con_2").click(function () { 
    //     console.log("컨텐츠2");
    //     if (tabNum_2 === 0) {
    //         $(".tab_sub_con_2").css({
    //             display: "block"
    //         });

    //         tabNum_2++;
    //     } else if (tabNum_2 === 1) { 
    //         $(".tab_sub_con_2").css({
    //             display: "none"
    //         });
            
    //         tabNum_2--;
    //     }
    // });

    // var tabNum_3 = 0;
    
    // $(".tab_con_3").click(function () { 
    //     console.log("컨텐츠3");
    //     if (tabNum_3 === 0) {
    //         $(".tab_sub_con_3").css({
    //             display: "block"
    //         });

    //         tabNum_3++;
    //     } else if (tabNum_3 === 1) { 
    //         $(".tab_sub_con_3").css({
    //             display: "none"
    //         });

    //         tabNum_3--;
    //     }
    // });

    // var tabNum_4 = 0;
    
    // $(".tab_con_4").click(function () { 
    //     console.log("컨텐츠4");
    //     if (tabNum_4 === 0) {
    //         $(".tab_sub_con_4").css({
    //             display: "block"
    //         });

    //         tabNum_4++;
    //     } else if (tabNum_4 === 1) { 
    //         $(".tab_sub_con_4").css({
    //             display: "none"
    //         });

    //         tabNum_4--;
    //     }
    // });
    
    $(".tab_con").each(function (num) {
        $(this).attr({
            "data-number": num
        });
  
    }).click(function () { 
        var clicked = $(this).attr("data-number");

        $(".tab_sub_con").css({
            display: "none"
        });

        $(".tab_sub_con").eq(clicked).css({ 
            display: "block"
        });

        $(".tab_con").find(".tab_more_btn").css({
            transform: "rotate(0)"
        });

        $(".tab_con").eq(clicked).find(".tab_more_btn").css({
            transform: "rotate(180deg)"
        });

    });
    // tab_con event end

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
            slideShadows: true
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