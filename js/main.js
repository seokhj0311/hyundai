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
    // sec_1_event end

});