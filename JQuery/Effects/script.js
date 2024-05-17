
// use JQuery Event
$(document).ready(function(){
    $('#show').click(function(){
        $('p').toggle();
    })
    $('#hide').click(function(){
        $('p').hide(2000);
    })

});

