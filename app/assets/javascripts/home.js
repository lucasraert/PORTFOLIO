$(document).ready(function() {
  $('.menu').hide();
  $('#home').hide().show( "fade", 400 );
});


function openNav() {
  $('.menu').toggle( "drop", { direction: "right"}, 250 );
  $('.cool').toggleClass('opacity-low');
  $('.ui-menu__line_1').toggleClass('ui-menu__line_1_opened');
  $('.ui-menu__line_3').toggleClass('ui-menu__line_3_opened');
  $('.ui-menu__line_2').toggle();
  $("body").toggleClass('no-scroll');
};

function showMessage(id) {
  var message = $('#message-' + id);
  message.css('display', 'inline-block');
}

function start() {
  var messages = $('.message');
  var timeOut = 1000;

  messages.each(function(index) {
    index += 1;
    if (index === messages.length) window.setTimeout( function() { writer.remove(); }, timeOut );
    window.setTimeout( function() { showMessage(index); }, timeOut );
    timeOut += 1200;
  });
}

$(document).ready(function() {
  start();
  $('#replay').click(start());
});
