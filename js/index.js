// swiper创建
var swiper = new Swiper(".swiper-container", {
	direction: "vertical",
});

// 第一个按钮
$('.slide1-btn').click(function(){
    swiper.slideNext();
    $(".slide2-logo").addClass("animated bounceInDown");
    $(".slide2-btn").addClass("animated bounceInUp");
    $(".slide2-video-wrap").addClass("animated zoomIn");
});

// 第二个按钮
$('.slide2-btn').click(function(){
    swiper.slideNext();
    $(".slide3-logo").addClass("animated slideInLeft");
    $(".slide3-btn").addClass("animated slideInRight");
    $(".slide3-video-wrap").addClass("animated zoomIn");
})

// 第三个按钮
$('.slide3-btn').click(function(){
    swiper.slideNext();
    $(".slide4-card").addClass("animated flipInY");
    $(".slide4-btn").addClass("animated rubberBand");

})

