const links = document.querySelectorAll('a'); 
const footlinks = document.querySelectorAll('.foot_a'); 
const pageContainer = document.querySelector('.page-container');
const footContainer = document.querySelector('.footer-tr');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    pageContainer.classList.add('fade-out');
    
    setTimeout(function() {
      window.location.href = href;
    }, 1000);
  });
}

for (let i = 0; i < footlinks.length; i++) {
  footlinks[i].addEventListener('click', function(event) {
    console.log(footlinks[i]);
    event.preventDefault();
    const href = this.getAttribute('href');
    pageContainer.classList.add('fade-out');
    footContainer.classList.add('slide-up');
    
    // setTimeout(function() {
    //   window.location.href = href;
    // }, 1000);
  });
}

