$(document).ready(function() {
  $('.menu').hide();
  $('#home').hide().show( "fade", 400 );
});

function openNav() {
  $('.menu').toggle( "drop", { direction: "right"}, 250 );
  $('#home').toggleClass('opacity-low');
  $('.ui-menu__line_1').toggleClass('ui-menu__line_1_opened');
  $('.ui-menu__line_3').toggleClass('ui-menu__line_3_opened');
  $('.ui-menu__line_2').toggle();
  $("body").toggleClass('no-scroll');
};
