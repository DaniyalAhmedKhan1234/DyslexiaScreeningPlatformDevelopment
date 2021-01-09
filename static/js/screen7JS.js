var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

(function ($) {
    "use strict";
    new WOW().init

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
    // Smooth scroll for the navigation and links with .scrollto classes
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
  
          if ($('#header').length) {
            top_space = $('#header').outerHeight();
  
            if (! $('#header').hasClass('header-scrolled')) {
              top_space = top_space - 20;
            }
          }
  
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.main-nav, .mobile-nav').length) {
            $('.main-nav .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
var selected_option_1;
var selected_option_2;
var selected_option_3;

$('.box-first').click(function(){
  selected_option_1 = $('.caption_text_1').html()
})
$('.box-second').click(function(){
  selected_option_2 = $('.caption_text_2').html()
})
$('.box-third').click(function(){
  selected_option_3= $('.caption_text_3').html()
})
var urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('id');
console.log(myParam)

$('.next_button').click(function() {
  
fetch(`${window.origin}/q6_quiz`,{
    method : 'POST',
    credentials : "include",
    body : JSON.stringify({
      selected : [selected_option_1,selected_option_2,selected_option_3],
      query_variable_in_url : myParam
    }),
    cache : 'no-cache'
  }).then(function(response){
    console.log("OKAY2")
    if(response.status == 200)
    { 
      console.log("OKAY!")
      response.json().then(function(data_received){
        window.location.href = `${window.origin}/q7_quiz` + '?id=' + data_received['id_to_be_passed'];
      })

    }
  }

  )
})
})(jQuery)