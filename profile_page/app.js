
$(document).ready(function() {
    $('#button').click(function() {
        $('#descriptionBox').slideToggle();
      });

      var imageIndex = 0;
      var imageUrls = [
          "https://i.imgur.com/wMds5Jx.jpg",
          "https://i.imgur.com/oGeh27M.jpg",
          "https://i.imgur.com/croIVsG.jpg" // Add more image URLs here
        
      ];
  
      $("#profilepic").click(function() {
          imageIndex = (imageIndex + 1) % imageUrls.length;
          $(this).attr("src", imageUrls[imageIndex]);
      });

    $(".projectdiv").each(function(index) {
        $(this).delay(400 * index).animate({ opacity: 1 }, 100); // Adjust the duration and delay as desired
      });
    
    const $linkedinButton = $('<button id="linkedin">LinkedIn</button>');

      // Add click event handler to the button
      $linkedinButton.click(function() {
          window.location.href = 'https://www.linkedin.com/in/aleksandr-samedinov-77a63227a/'
      });

      const $githubButton = $('<button id="github">GitHub</button>');

      // Add click event handler to the button
      $githubButton.click(function() {
        window.location.href = 'https://github.com/aleksandr9707'
      });


      $('#buttonContainer').append($linkedinButton);
      $('#buttonContainer').append($githubButton);
  });


  