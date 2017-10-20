// TODO: click arrow, use smooth transition animation to go to section
// TODO: hover over arrow, text box appear for that says top, go to next section
// TODO: Use owl carousel for portfolio


$(document).ready(function(){
  $('.carousel').carousel({interval: false});

  $(document).on('mouseleave', '.carousel', function() {
      $(this).carousel('pause');
  });
});
