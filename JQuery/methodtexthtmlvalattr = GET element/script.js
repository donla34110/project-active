
// use JQuery EvenT
$(document).ready(function(){
    $('#btn1').click(function(){
       alert("Text:" + $('#demo1').text());
    })
    $('#btn2').click(function(){
        alert("HTML:" + $('#demo1').html());
     });
    $('#btn3').click(function(){
        alert("Value:" + $('#demo2').val());
     });
     $('#btn4').click(function(){
        alert("attr:" + $('#demo2').attr("type"));
     });
});


