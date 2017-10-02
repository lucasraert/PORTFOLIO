$(document).ready(function() {
  $('#aboutme').hide().show( "drop", { direction: "down"}, 300 );
  $('#services').hide().show( "drop", { direction: "down"}, 800 );
   $('#keyskills').hide().show( "drop", { direction: "down"}, 800 );
  $('.menu').hide();
});

function openNav() {
  $('.menu').toggle( "drop", { direction: "right"}, 250 );
  $('#about').toggleClass('opacity-low');
  $('.ui-menu__line_1').toggleClass('ui-menu__line_1_opened');
  $('.ui-menu__line_3').toggleClass('ui-menu__line_3_opened');
  $('.ui-menu__line_2').toggle();
  $("body").toggleClass('no-scroll');
};
