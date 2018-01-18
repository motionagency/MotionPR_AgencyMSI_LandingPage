  $(document).ready(function($) {


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
