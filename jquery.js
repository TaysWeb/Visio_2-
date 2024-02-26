// $(document).ready(function () {
//   let currentSlide = 0;
//   const slides = $('.slide');
//   let circles = $('.circle');

//   function showSlide(index) {
//       currentSlide = (index + slides.length) % slides.length;
//       slides.css('transform', `translateX(${-99 * currentSlide}%)`);
//       circles.removeClass('active');
//       circles.eq(currentSlide).addClass('active');
//   }

//   function changeSlide(offset) {
//       showSlide(currentSlide + offset);
//   }

//   $('.arrow').on('click', function () {
//       changeSlide(1);
//   });

//   $('.circles ').on('click', '.circle', function () {
//       const cirIndex = $(this).index();
//       showSlide(cirIndex);
//   });

//   for (let i = 0; i < slides.length; i++) {
//       $('.circles ').append('<div class="circle"></div>');
//   }

// circles = $('.circles'); 

//   showSlide(currentSlide);

// });

$(document).ready(function () {
  let currentSlide = 0;
  const slides = $('.slide');
  let circlesContainer = $('.circles'); // Corrected variable name

  function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      slides.css('transform', `translateX(${-100 * currentSlide}%)`); // Corrected transform value
      circles.removeClass('active');
      circles.eq(currentSlide).addClass('active');
  }

  function changeSlide(offset) {
      showSlide(currentSlide + offset);
  }

  $('.arrow').on('click', function () {
      changeSlide(1);
  });

  circlesContainer.on('click', '.circle', function () { // Corrected selector
      const cirIndex = $(this).index();
      showSlide(cirIndex);
  });

  for (let i = 0; i < slides.length; i++) {
      circlesContainer.append('<div class="circle"></div>');
  }

  circles = circlesContainer.find('.circle'); // Removed unnecessary reassignment

  showSlide(currentSlide);
});
