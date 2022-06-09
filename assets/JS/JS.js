//  Slider TEXT
$(document).ready(function () {

    $('.autoplay').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        Accessibility: true,
        appendArrows: '.contron-pre-next',
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

});
// end Slider TEXT

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000); // Change image every 2 seconds
}


$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    })
});


$(document).ready(preloderFunction());
    
    
    
function preloderFunction() {
  
    setTimeout(function() {
        
        // Force Main page to show from the Start(Top) even if user scroll down on preloader - Primary (Before showing content)
       
        // Model 1 - Fast            
        document.getElementById("page-top").scrollIntoView();
        
        // Model 2 - Smooth             
        // document.getElementById("page-top").scrollIntoView({behavior: 'smooth'});
                
        
    
        
        // Removing Preloader:
        
        $('#ctn-preloader').addClass('loaded');  
        // Once the preloader has finished, the scroll appears 
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
            // It is so that once the preloader is gone, the entire preloader section will removed
            $('#preloader').delay(1000).queue(function() {
                $(this).remove();
                
                // If you want to do something after removing preloader:
                afterLoad();
                
            });
        }
    }, 3000);
}



function afterLoad() {
    // After Load function body!
}

 jQuery(document).ready(function () {
    jQuery('body').bind('cut copy paste', function (e) {
      e.preventDefault();
    });
    jQuery("body").on("contextmenu",function(e){
      return false;
    });
  });
  jQuery(document).keydown(function (event) {
    if (event.keyCode == 123) {
      return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
      return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      return false;
    }
  });
  document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
      return false;
    } else {
      return true;
    }
  };
  jQuery(document).keypress("u",function(e) {
    if(e.ctrlKey) {
      return false;
    } else {
      return true;
    }
  });
  document.body.addEventListener('keydown', event => {
    if (event.ctrlKey && 'spa'.indexOf(event.key) !== -1) {
      event.preventDefault()
    }
  })


<<<<<<< HEAD

//Code by ARiyou2000    


=======
//Code by ARiyou2000    
>>>>>>> 777496c786f70c73e5aa842d1ab6b20d1a0ffec4
