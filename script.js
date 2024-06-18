function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  
    });
  }

  var settingsmenu = document.querySelector(".settings-menu");
  function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");
  }