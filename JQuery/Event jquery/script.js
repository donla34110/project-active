
// use JQuery Selector
$(document).ready(function(){
    $('p').on({
        mouseenter: function(){
            $(this).css("background-color","red");
        },mouseleave: function(){
            $(this).css("background-color","orange");
        },click: function (){
            $(this).css("background-color","green")
        }

        

        
    })
});

