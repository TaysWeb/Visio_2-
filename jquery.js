$(document).ready(function () {
  let currentSlide = 0;
  const slides = $('.slide');
  let circles = $('.circle');

  function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      slides.css('transform', `translateX(${-99 * currentSlide}%)`);
      circles.removeClass('active');
      circles.eq(currentSlide).addClass('active');
  }

  function changeSlide(offset) {
      showSlide(currentSlide + offset);
  }

  $('.arrow').on('click', function () {
      changeSlide(1);
  });

  $('.circles ').on('click', '.circle', function () {
      const cirIndex = $(this).index();
      showSlide(cirIndex);
  });

  for (let i = 0; i < slides.length; i++) {
      $('.circles ').append('<div class="circle"></div>');
  }

circles = $('.circles'); 

  showSlide(currentSlide);

});