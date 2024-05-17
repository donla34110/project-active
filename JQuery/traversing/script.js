
// use JQuery EvenT
$(document).ready(function(){
    $('span').parentsUntil("div.ancestors").css({
        "color" : "red",
        "border" : "2px solid black"
    })

});


