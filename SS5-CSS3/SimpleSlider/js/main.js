// Thêm hiệu ứng click cho các phím mũi tên
function onKeyDown(event) {
    var key = event.keyCode;
  
    if (key === 37) {
      // Phím mũi tên trái
      prevSlide();
    } else if (key === 39) {
      // Phím mũi tên phải
      nextSlide();
    }
  }
  
  // Thêm hiệu ứng cho các slide
  function prevSlide() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = slides[slides.indexOf(document.querySelector('.active'))];
    var prevSlide = currentSlide === slides[0] ? slides[slides.length - 1] : currentSlide - 1;
  
    currentSlide.classList.remove('active');
    prevSlide.classList.add('active');
  }
  
  function nextSlide() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = slides[slides.indexOf(document.querySelector('.active'))];
    var nextSlide = currentSlide === slides[slides.length - 1] ? slides[0] : currentSlide + 1;
  
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
  }
  
  // Gán sự kiện click cho các phím mũi tên
  document.addEventListener('keydown', onKeyDown);