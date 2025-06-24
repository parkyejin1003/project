$(function(){
    let submenu = $('.headerBottomNav nav>ul>li');
    let sub=$('.headerBottomNav nav>ul>li>ul');

    submenu.click(function(e){
        e.preventDefault();
        e.stopPropagation(); //다른 li를 클릭하면 현재 열려있는 서브메뉴 닫기
        let sub=$(this).find('ul');

        if(sub.is(':visible')){
            sub.slideUp();
        }else{
            sub.slideDown();
        }  
    })


    let line= $('.searchBox .menu>div')
    let nav= $('.headerBottomNav nav');
    //햄버거메뉴
    $('.searchBox .menu').click(function(e){
        e.preventDefault();
        line.toggleClass('active')
        nav.toggleClass('active')

    });
    $(window).on('resize', function(){
        line.removeClass('active');
        nav.removeClass('active');
        sub.slideUp();
    });

    //스와이퍼
    var swiper = new Swiper(".section01_swiper_Frame", {
      pagination: {
        el: ".swiper_pagination",
        type: "fraction",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        loop:true,
      },
      navigation: {
        nextEl: ".swiper-nextBtn",
        prevEl: ".swiper-prevBtn",
      },
    });
    let sp=0;
    $('.section01 .swiper_pauseBtn').click(function(){
        if(sp==0){
            $(this).attr({class:"swiper_playBtn"})
            swiper.autoplay.stop();
            sp=1;
        }else{
            $(this).attr({class:"swiper_pauseBtn"})
            swiper.autoplay.start();
            sp=0;
        }
    });

    var swiper = new Swiper(".sec3Swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        
          768: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,  //브라우저가 1024보다 클 때
            spaceBetween: 50,
          },
        },
    });


    var bullet=['강좌','답사','공모','논문']
     var swiper1 = new Swiper(".tabslide", {
      spaceBetween: 0,
      
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,//사용자가 슬라이드를 조작해도 자동 넘김이 계속 유지
      },
      pagination: {
        el: ".tab-pagination",
        clickable: true,
        renderBullet:function(index, className){
          return `<div class=${className}><span>${bullet[index]}</span></div>`
        }
      },
      observer:true,
      observeParents:true,
    });
    let sp1=0;
    $('.section05 .swiper_pauseBtn').click(function(){
        if(sp1==0){
            $(this).attr({class:"swiper_playBtn"})
            swiper1.autoplay.stop();
            sp1=1;
        }else{
            $(this).attr({class:"swiper_pauseBtn"})
            swiper1.autoplay.start();
            sp1=0;
        }
    });

    var swiper2 = new Swiper(".tab_con2", {
      pagination: {
        el: ".swiper_pagination",
        type: "fraction",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        
      },
      navigation: {
        nextEl: ".swiper-nextBtn",
        prevEl: ".swiper-prevBtn",
      },
    });


})