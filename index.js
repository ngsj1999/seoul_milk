$(document).ready(function(){
    $(".hamburger .menu").click(function(){
        $(".mobile_menu").stop().slideDown();
    });
    $(".close").click(function(){
        $(".mobile_menu").stop().slideUp();
    });

    let i = 0;
    let count = $(".ban_gp>li").length;

    $(".circle>li").click(function(){
        i = $(this).index();

        $(".circle>li").removeClass("on");
        $(".circle>li").eq(i).addClass("on");
        $(".ban_gp>li").stop().fadeOut();
        $(".ban_gp>li").eq(i).stop().fadeIn();
        
    });

    $(".banner").mouseenter(function(){
        clearInterval(autoSlide);
    });
    $(".banner").mouseleave(function(){
            autoSlide = setInterval(function(){
            if(i == count-1){
                i = 0;
            }else{
                i++;
            }
            $(".circle>li").removeClass("on");
            $(".circle>li").eq(i).addClass("on");
            $(".ban_gp>li").stop().fadeOut();
            $(".ban_gp>li").eq(i).stop().fadeIn();
        }, 3000);
    });

    let autoSlide = setInterval(function(){
        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        $(".circle>li").removeClass("on");
        $(".circle>li").eq(i).addClass("on");
        $(".ban_gp>li").stop().fadeOut();
        $(".ban_gp>li").eq(i).stop().fadeIn();
    }, 3000);

    $(".menu").click(function(){
        $(".gnb_sidemenu").stop().animate({"right":"0%"});
    });
    $(".close").click(function(){
        $(".gnb_sidemenu").stop().animate({"right":"-100%"});
    });

    $(".list_aco").click(function(){
        $(this).stop().toggleClass("slide").siblings().slideToggle();
    });
});