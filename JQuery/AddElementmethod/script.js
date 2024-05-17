
// use JQuery EvenT
$(document).ready(function(){
    $('#btn1').click(function(){
        $('p').prepend("<b>Append Text</b>")
    })
    $('#btn2').click(function(){
        $('ol').prepend("<li>Append Text</li>")
    })

    
    $('#btn3').click(function(){
        $('.box').before("<b>Before Text</b>")
    })        
    $('#btn4').click(function(){
        $('.box').after("<b>after Text</b>")
    })        
});


