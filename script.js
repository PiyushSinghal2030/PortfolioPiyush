let prev = document.querySelector('.prev');
        let next = document.querySelector('.next');
    
        next.addEventListener('click', function () {
            let items = document.querySelectorAll('.image-slider-image');
            let lastItem = items[items.length - 1];
            lastItem.parentElement.prepend(lastItem);
        });
    
        prev.addEventListener('click', function () {
            let items = document.querySelectorAll('.image-slider-image');
            let firstItem = items[0];
            firstItem.parentElement.appendChild(firstItem);
        });

        var typed = new Typed('.text', {
      strings: ["Frontend Developer","Youtuber", "Web Developer", "Graphic Designer", "Android Developer"],
      typeSpeed:100,
      backspeed:100,
      backDelay:1000,
      loop:true
    });
    

    let myBtn=document.getElementById('scrollToTop');
    window.onscroll=function() {scrollFunction()};
    function scrollFunction(){
      if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        myBtn.style.display='block';
    }
    else{
        myBtn.style.display='none';

    }
  }
  function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
  }
    

  document.getElementById('scroll-per-1').addEventListener('click',()=>{
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
    });
  });
  document.getElementById('scroll-per-2').addEventListener('click',()=>{
    window.scrollTo({
      top: 650,
      left: 0,
      behavior: "smooth"
    });
  });
  document.getElementById('scroll-per-6').addEventListener('click',()=>{
    window.scrollTo({
      top: 1550,
      left: 0,
      behavior: "smooth"
    });
  });
  document.getElementById('scroll-per-3').addEventListener('click',()=>{
    window.scrollTo({
      top: 2200,
      left: 0,
      behavior: "smooth"
    });
  });
  document.getElementById('scroll-per-4').addEventListener('click',()=>{
    window.scrollTo({
      top: 3050,
      left: 0,
      behavior: "smooth"
    });
  });
  document.getElementById('scroll-per-5').addEventListener('click',()=>{
    window.scrollTo({
      top: 3700,
      left: 0,
      behavior: "smooth"
    });
  });