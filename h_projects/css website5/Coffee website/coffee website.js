 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      grabcursor:true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const body = document.querySelector('body')
    navMenu= body.querySelector('.menu-content')
    navopenbtn = body.querySelector('.navopen-btn')
    navclosebtn = navMenu.querySelector('.navclose-btn')

    if(navMenu && navopenbtn){
    	navopenbtn.addEventListener("click",()=>{
    		navMenu.classList.add("open");
    		body.style.overflowY ="hidden";
    	})
    }
    if(navMenu && navclosebtn){
    	navclosebtn.addEventListener("cilck",()=>{
    		navMenu.classList.remover("open");
    		body.style.overflowY ="scroll";

    	})
    }
// chnage header bg color---

    window.addEventListener("scroll",() => {
      const scrollY = window.pageYOffset;
      if(scrollY > 5){
        document.querySelector("header").classList.add("header.active");
      }else{
        document.querySelector("header").classList.add("header.active");
      }
      console.log(scrollY)
    })

    // ---scroll up button---

    const scrollUpBtn = document.querySelector('scrollUp-btn');
    if(scrollY > 250){
      scrollUpBtn.classList.add("scrollUp-btn-active");
      
    }