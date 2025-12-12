let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
  searchForm.classList.toggle('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  
}



$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('.fa-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
  });

  $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 5000,
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum + '+');
      }
    });
  });

  $('.project').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});

