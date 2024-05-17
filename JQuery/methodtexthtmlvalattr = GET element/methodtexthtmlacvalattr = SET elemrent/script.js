
// use JQuery EvenT
$(document).ready(function(){
    $('#btn1').click(function(){
       $('#demo1').text("Hello word")
    })
    $('#btn2').click(function(){
      $('#demo1').html("<h1>Hekko word!<h1>")
   })
   $('#btn3').click(function(){
      $('#demo3').val("Hekko word")
   })
  $('#btn4').click(function(){
   $('#demo4').attr({"href": "https://youtube.com",
      "title": "youtube"
   })
  })
   
});


