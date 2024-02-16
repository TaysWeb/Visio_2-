$('document').ready(function(){
    // next button click event
    $('.next').click(function(){
      // select image slides
      let prev = document.querySelector('.previous'); 
      let next = document.querySelector('.next'); 
      // remove class 
      $(prev).removeClass('previous'); 
      $(next).removeClass('next'); 
      
      // add class 
      $(prev).addClass('next'); 
      $(next).addClass('previous'); 
    })
    
    // prev button click event
    $('.previous').click(function(){
      // select image slides
      let prev = document.querySelector('.prev'); 
      let next = document.querySelector('.next'); 
      
      // remove class 
      $(prev).removeClass('previous'); 
      $(next).removeClass('next'); 
      
      // add class 
      $(prev).addClass('next'); 
      $(next).addClass('previous'); 
    })
  });