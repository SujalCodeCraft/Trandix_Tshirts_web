$(document).ready(function () {
  // Initialize slider1
  $(".slider1").owlCarousel({
    loop: true,              // Infinite loop
    nav: false,              // Disable next/prev buttons
    dots: false,             // Disable pagination dots
    autoplay: true,          // Autoplay slider
    autoplayTimeout: 2000,   // Time per slide in ms
      items: 4,                // Show 4 items at a time
    responsive: {
      0: {
        items: 1             // 1 item on small screens
      },
      600: {
        items: 2             // 2 items on medium screens
      },
      1000: {
        items: 4             // 4 items on large screens
      }
    }
  });

  // Initialize slider_blogs
  $(".slider_blogs").owlCarousel({
    loop: true,              // Infinite loop
    nav: false,              // Disable next/prev buttons
    dots: false,             // Disable pagination dots
    autoplay: true,          // Autoplay slider
    autoplayTimeout: 3000,   // Time per slide in ms
    autoplayHoverPause: true, // Pause on hover
    items: 3, 
    center:true,               // Show 3 items at a time by default
    responsive: {
      0: {
        items: 1             // 1 item on small screens
      },
      600: {
        items: 2             // 2 items on medium screens
      },
      1000: {
        items: 3             // 3 items on large screens
      }
    }
  });



  
 
});
// Initialize the Owl Carousel
let owl = $(".detail-img-slider").owlCarousel({
  loop: true,
  nav: false,       // No default navigation
  dots: false,      // Disable dots
  autoplay: true,   // Autoplay
  autoplayTimeout: 3000, // 3-second delay
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});

// Custom Previous Button
$('#details-img-prev').click(function() {
  owl.trigger('prev.owl.carousel');
});

// Custom Next Button
$('#details-img-next').click(function() {
  owl.trigger('next.owl.carousel');
});




function getpage(page) {
  window.location.href = page; // Redirects the user to the 'details.html' page
}