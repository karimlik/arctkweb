var swiper = new Swiper('.swiper-container', {
    
  loop: true,

  //Pagniation
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },

  //Navigation Arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

var swiper = new Swiper('.partners-container', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 1,
  pagination: {
       el: '.partners-pagination',
    clickable: true,
    },

    //Navigation Arrows
    navigation: {
      nextEl: '.swipe-button-next',
      prevEl: '.swipe-button-prev',
   },
});