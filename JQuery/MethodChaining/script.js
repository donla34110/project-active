
// use JQuery EvenT
$(document).ready(function(){
   $('#flib').click(function(){
    $('#panel').slideDown(2000).slideUp();
   });     
   $('#stop').click(function(){
    $('#panel').stop();

   })
        
});


