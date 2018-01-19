  $(document).ready(function($) {

  // Smooth Scroll
  // Add smooth scrolling to all links
  $("a.smooth").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Responsive images
  $('img').addClass('img-fluid');

  // Defining a function to set size for #hero
   function fullscreen(){
     $('.home-hero').css({
             width: $(window).width(),
             height: $(window).height()
         });
   }
   // call function
   fullscreen();

   // Run the function in case of window resize
   $(window).resize(function() {
        fullscreen();
    });

  });
