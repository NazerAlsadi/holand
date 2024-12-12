$(document).ready(function() {
    $("#owl").owlCarousel({
     // autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });
    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 6,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
   
  });


   /**
   * Preloader
   */
   const preloader = document.querySelector('#preloader');
   if (preloader) {
     window.addEventListener('load', () => {
       preloader.remove();
     });
   }


(
  
  function() {
      /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);




/**
   * Mobile nav toggle
   */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}
if (mobileNavToggleBtn) {
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
}

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navmenu a').forEach(navmenu => {
  navmenu.addEventListener('click', () => {
    if (document.querySelector('.mobile-nav-active')) {
      mobileNavToogle();
    }
  });

});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  navmenu.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});





}

)();