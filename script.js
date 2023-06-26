$(function() {
let header = $("#header");
let intro = $("#intro");
let introH;
let scrollPos = $(window).scrollTop();

let nav = $("#nav");
let navToggle = $("#navToggle");

checkScroll(scrollPos, introH);

$(window).on("scroll load resize", function() {
  introH = intro.innerHeight();
  scrollPos = $(this).scrollTop();

  checkScroll(scrollPos, introH);
  
});

function checkScroll(scrollPos, introH) {
  if(scrollPos > introH) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
}

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  let elementID = $(this).data('scroll');
  let elementOffset = $(elementID).offset().top;
  nav.removeClass("show");

  console.log(elementOffset);

  $("html, body").animate({
    scrollTop: elementOffset - 150
  }, 700);
});

/* navToggle */

navToggle.on("click", function(event) {
    event.preventDefault();
  
    nav.toggleClass("show");
  
  });

  /* slider */
  $("#js-scroll-projects").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
     
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
 
        }
      },
      {
        breakpoint:575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $("#js-slider-team").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
     
        }
      },
      {
        breakpoint: 935,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
 
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 465,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  });

});