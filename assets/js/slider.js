
  /* Testimonial JS */
  document.addEventListener('DOMContentLoaded', function (){
    const swiper = new Swiper('.unique', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
          nextEl: '#slider-previous-unique',
          prevEl: '#slider-next-unique',
      },
    });
  });



/* Header Menu */
  
document.getElementById('mobileMenuButton').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuOpenIcon = document.getElementById('menuOpenIcon');
    var menuCloseIcon = document.getElementById('menuCloseIcon');

    // Toggle mobile menu visibility
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    }
});






const testimonialTexts = [ // Renamed this variable to avoid conflicts
  "From the moment I stepped in, I knew I was in for a treat. The ambiance was cozy and inviting, and the food was simply incredible. Every bite was bursting with flavor, and the presentation was a work of art. This is my go-to spot for a memorable dining experience!",
  "James Taylor says: 'A wonderful place with an amazing vibe! The food exceeded my expectations, and I can't wait to come back. Highly recommended!'",
  "Ben Foakes shares: 'A truly delightful experience! The staff was friendly, and the dishes were cooked to perfection. I left with a happy heart and a full stomach!'",
  "Sarah Taylor states: 'This restaurant is a gem! The flavors are unique, and the service is outstanding. I love the attention to detail in every aspect of the dining experience.'"
];

document.addEventListener("DOMContentLoaded", function () {
  const testimonialDivs = document.querySelectorAll(".testimonial"); // Renamed this to avoid conflict

  testimonialDivs.forEach(div => {
    div.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      document.getElementById("testimonial-text").innerText = testimonialTexts[index]; // Use correct variable

      // Reset all divs to semi-transparent background
      testimonialDivs.forEach(item => {
        item.classList.remove("bg-white");
        item.classList.add("bg-primaryColor", "bg-opacity-30"); // Light background for non-active items
      });

      // Set clicked div to white
      this.classList.add("bg-white");
      this.classList.remove("bg-primaryColor", "bg-opacity-30");
    });
  });
});
