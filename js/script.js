
let swiper = new Swiper(".sample-slider", {
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints:{
      481:{
      slidesPerView: 2,
      spaceBetween: 0,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    observeParents: true,
    observer: true,
  });

  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fade-up1');         
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.9 });          
    images.forEach(img => observer.observe(img));
  });

  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fade-up1');         
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.9 });          
    images.forEach(img => observer.observe(img));
  });

  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fade-up2');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.9 });              
    images.forEach(img => observer.observe(img));
  });

  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.fade-up3');            
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.9 });           
    images.forEach(img => observer.observe(img));
    });

    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.fade-up4');            
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.9 });          
        images.forEach(img => observer.observe(img));
      });

      document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.fade-up5');
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.9 });              
        images.forEach(img => observer.observe(img));
      });

      document.addEventListener("DOMContentLoaded", function () {
        const drawerInput = document.getElementById("drawer_input");
        const navContent = document.querySelector(".nav_content");
        const body = document.querySelector(".page-content");
        drawerInput.addEventListener("change", function () {
          if (drawerInput.checked) {
            let menuHeight = navContent.offsetHeight;
            body.style.marginTop = menuHeight -25 + "px";
          } else {
            body.style.marginTop = "0";
          }
        });
      });