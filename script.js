
$(document).ready(function(){
    var clicks = 0;
    $("#like").click(function () {
    clicks++;
    $("#counter").text(clicks);
    });

});

$(document).ready(function(){
    var clicks = 0;
    $("#output").click(function () {
        clicks++;
        $("#increment").text(clicks);
    });

})
