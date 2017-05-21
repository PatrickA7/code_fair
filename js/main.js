//Code for picture slider
$(document).ready(function(){
  $('.bxslider').bxSlider({
  auto: true,
  touchEnabled: true,
  preloadImages: "all",
  speed: "2000"
});
});

//Scroll animations for about page

$("#main").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_about").offset().top
    }, 750);
});

$("#important_dates").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_important_dates").offset().top
    }, 750);
});

$("#prizes").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_prizes").offset().top
    }, 750);
});

$("#location").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_location").offset().top
    }, 750);
});

$("#staff").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_staff").offset().top
    }, 750);
});

$("#sponsors").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_sponsors").offset().top
    }, 750);
});

$("#judges").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_judges").offset().top
    }, 750);
});

$("#rules").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_rules").offset().top
    }, 750);
});

$("#sign_up").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_sign_up").offset().top
    }, 750);
});

// Search function
$(document).ready(function() {
     $('#tipue_search_input').tipuesearch();
});

