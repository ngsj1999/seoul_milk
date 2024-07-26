$(document).ready(function(){
    $(".hamburger .menu").click(function(){
        $(".mobile_menu").stop().slideDown();
    });
    $(".close").click(function(){
        $(".mobile_menu").stop().slideUp();
    });
});