/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };

  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    
    // Check if the page has been scrolled down
    if (window.scrollY > 50) { // Adjust the scroll threshold if needed
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });  
  
  showMenu('nav-toggle', 'nav-menu')
  
  /*===== REMOVE MENU MOBILE =====*/
  const navLink = document.querySelectorAll('.nav_link');
  const navMenu = document.getElementById('nav-menu');
  
  function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    navMenu.classList.remove('show');
  }
  
  navLink.forEach(n => n.addEventListener('click', linkAction));
  