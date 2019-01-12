$(document).ready(() => {
    $('#main-content').hide();
    $('.navbar').hide();
    $('.jumbo').hide();
    $('.navbar').slideDown(1000);
    $('.jumbo').slideDown(1000);
    $('#main-content').show(2000);
});

$('.nav-link').hover(function(){
    $(this).css("border-bottom", "solid 2px grey").delay(2000);
}, function () {
    $(this).css("border", "0");
});