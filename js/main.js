//Code for picture slider
$(document).ready(function(){
  $('.bxslider').bxSlider({
  auto: true,
  touchEnabled: true,
  preloadImages: "all",
  speed: "2000"
});
});

//Scroll animations for about and schedule page

$("#about").click(function() {
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

$("#subnav_sign_up").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_sign_up").offset().top
    }, 750);
});

$("#business_innovation").click(function() {
    $('html, body').animate({
        scrollTop: $("#main_event").offset().top
    }, 750);
});

$("#code_comp").click(function() {
    $('html, body').animate({
        scrollTop: $("#coding_comp").offset().top
    }, 750);
});

$("#poster_creation").click(function() {
    $('html, body').animate({
        scrollTop: $("#poster_comp").offset().top
    }, 750);
});

$("#workshop").click(function() {
    $('html, body').animate({
        scrollTop: $("#hour_workshops").offset().top
    }, 750);
});

$("#dating").click(function() {
    $('html, body').animate({
        scrollTop: $("#speed_dating").offset().top
    }, 750);
});

$("#awards").click(function() {
    $('html, body').animate({
        scrollTop: $("#academic_awards").offset().top
    }, 750);
});
// Search function
$(document).ready(function() {
     $('#tipue_search_input').tipuesearch();
});

$("#buttonstyle").click(function() {
     $('#tipue_search_input').tipuesearch();
})
//Sign up page functionality

//Checkbox required field functionality from https://stackoverflow.com/questions/22557055/submit-form-only-if-at-least-one-checkbox-is-checked
//dom ready handler
jQuery(function ($) {
    //form submit handler
    $('#sign_up').submit(function (e) {
        //check atleat 1 checkbox is checked
        if (!$('.event_select').is(':checked')) {
            //prevent the default form submit if it is not checked
            checkbox_error_message.textContent="Please select at least one option";
            e.preventDefault();
        }
    });
});
 
/* Mail validation tutorial from http://www.w3resource.com/javascript/form/email-validation.php*/
    
var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

jQuery(function ($) {
    $('#sign_up').submit(function (f) {
        if (!email_input.value.match(mail_format)) {
            email_error_message.textContent="Please enter a valid email address";
            f.preventDefault();
        }
        console.log(f);
    });
});


$('#select_school_hour').click(function() {
    $("#school_hour_form").toggle(this.checked);
});

$('#select_business_innovation').click(function() {
    $("#business_innovation_form").toggle(this.checked);
});

$('#select_coding_challenge').click(function() {
    $("#coding_challenge_form").toggle(this.checked);
});

$('#select_speed_dating_students').click(function() {
    $("#speed_dating_student_form").toggle(this.checked);
});

$('#select_speed_dating_employers').click(function() {
    $("#speed_dating_employer_form").toggle(this.checked);
});




$(document).ready(function(){
    $('#entry_status').on('change', function() {
      if ( this.value == 'Group')
      //.....................^.......
      {
        $("#group_table").show();
      }
      else
      {
        $("#group_table").hide();
      }
    });
});