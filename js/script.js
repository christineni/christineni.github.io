// TODO: click arrow, use smooth transition animation to go to section
// TODO: hover over arrow, text box appear for that says top, go to next section
// TODO: Use owl carousel for portfolio
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        480:{
            items:3,
            nav:false
        },
        768:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
});
