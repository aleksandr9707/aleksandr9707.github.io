//  const $btn = $('<button>')
//  $btn.on('click',)

 $('#toggleButton').click(function() {
    $('#descriptionBox').toggle();
});

$(document).ready(function() {
    $(".projectdiv").each(function(index) {
        $(this).delay(500 * index).animate({ opacity: 1 }, 1000); // Adjust the duration and delay as desired
      });
  });
