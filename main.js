// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

        // This script adds a class to the body after scrolling 100px
    // and we used these body.scroll styles to create some on scroll 
    // animations with the navbar
    
    document.addEventListener('scroll', (e) => { 
        const scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
    document.querySelector('body').classList.add('scroll')
        } else {
        document.querySelector('body').classList.remove('scroll')
        }
    });


    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }

        


// Service Accordion Script
const items = document.querySelectorAll('.service-item');

items.forEach(item => {
  const header = item.querySelector('.service-header');
  const content = item.querySelector('.service-content');

  header.addEventListener('click', () => {
    // Close others
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.service-content').style.height = '0px';
      }
    });

    // Toggle current
    if (item.classList.contains('active')) {
      content.style.height = '0px';
      item.classList.remove('active');
    } else {
      item.classList.add('active');
      content.style.height = content.scrollHeight + 'px';
    }
  });
});




window.addEventListener('load', () => {
  document.querySelectorAll('.hero-section .reveal').forEach(el => {
    el.classList.add('active');
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.reveal').forEach(el => {
          el.classList.add('active');
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.about-me-section').forEach(section => {
  observer.observe(section);
});

document.querySelectorAll('.services-accordion').forEach(section => {
  observer.observe(section);
});

document.querySelectorAll('.booking-section').forEach(section => {
  observer.observe(section);
});
document.querySelectorAll('.hours-section').forEach(section => {
  observer.observe(section);
});
document.querySelectorAll('.messages-section').forEach(section => {
  observer.observe(section);
});
document.querySelectorAll('.cta-2-section').forEach(section => {
  observer.observe(section);
});
