console.log('JS loaded');

$(document).ready(() => {
  const $aboutTag = $("h3.about");
  const $myName = $("div.myName");
  const $aboutText = $("div.aboutMe");

  let aboutBoolean = false;



  $aboutTag.click(function() {
    if (!aboutBoolean) {
      aboutBoolean = true;
      $myName.css({"transform": "translateY(-52%) translateX(-100%)"});
      $aboutText.css({"transform": "translateX(0%)"});
    } else {
      aboutBoolean = false;
      $myName.css({"transform": "translateY(-52%) translateX(0%)"});
      $aboutText.css({"transform": "translateX(160%)"});
    }

  });


  $("a.scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 2
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });


});
