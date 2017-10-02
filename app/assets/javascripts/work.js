$(document).ready(function() {
  $('.menu').hide();
   $('#work-phone').hide().show( "drop", { direction: "down"}, 400 );
  $('.mockup').hide().show( "drop", { direction: "down"}, 500 );
});

function openNav() {
  $('.menu').toggle( "drop", { direction: "right"}, 250 );
  $('#calypso').toggleClass('opacity-low');
  $('.ui-menu__line_1').toggleClass('ui-menu__line_1_opened');
  $('.ui-menu__line_3').toggleClass('ui-menu__line_3_opened');
  $('.ui-menu__line_2').toggle();
  $("body").toggleClass('no-scroll');
  };
