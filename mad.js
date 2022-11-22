/*$(window).scroll(function(){
    $(".yay").css("opacity", 1 - $(window).scrollTop() / 150);
  });

const banner = document.getElementByClassName('banner');
const blocks = document.getElementByClassName('blocks');

for(var i =1; i<400;i++){
  banner.innerHTML +="<div class='blocks'></div>";
  blocks[i].style.animationDelay = '${i=0 * 0.05}s'
}
*/window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

 $(window).scroll(function(){
    $(".yay").css("opacity", 1 - $(window).scrollTop() / 200);
  });

  $(window).scroll(function(){
     $(".yayy").css("opacity",  $(window).scrollTop() / 200);
   });
   $(window).scroll(function(){
      $(".yayy").css("opacity", 1 - $(window).scrollTop() / 2000);
    });

$(window).scroll(function(){
     $(".project").css("opacity",  $(window).scrollTop() / 1800);
   });
   $(window).scroll(function(){
      $(".project9").css("opacity", 1 - $(window).scrollTop() / 1000);
    });

