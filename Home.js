document.addEventListener("DOMContentLoaded", function () {
    const galeriLink = document.querySelector('nav ul li:nth-child(2) a');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to handle scroll events
    function handleScroll() {
      const page2 = document.getElementById('page2');
      if (isInViewport(page2)) {
        galeriLink.style.color = ' #4895ff'; // Change color to blue
      } else {
        galeriLink.style.color = 'black'; // Change color back to black
      }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);
  });


document.addEventListener("scroll", function() {
    const navbar = document.getElementById('navbar')

    if (window.scrollY > 300) {
        navbar.classList.add("navbar-scrolled")
    } else {
        navbar.classList.remove("navbar-scrolled")
    }
})

const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul')
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide')
})
