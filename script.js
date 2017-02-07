var clicks = 0;

$(document).ready(function(){
    $("#like").click(function () {
    clicks++;
    $("#counter").text(clicks);
    });




});
