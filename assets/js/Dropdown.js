class Dropdown {
  constructor(buttonId, menuId, iconId) {
    
    this.button = document.getElementById(buttonId);
    this.menu = document.getElementById(menuId);
    this.icon = document.getElementById(iconId);
    this.isVisible = false;
    this.leaveTimeout = null;

    this.button.addEventListener('click', (event) => this.handleButtonClick(event));
    this.button.addEventListener('mouseenter', (event) => this.handleMouseEnter(event));
    this.button.addEventListener('mouseleave', () => this.scheduleHideMenu());
    this.menu.addEventListener('mouseenter', () => this.cancelHideMenu());
    this.menu.addEventListener('mouseleave', () => this.scheduleHideMenu());
    document.addEventListener('click', (event) => this.handleClickOutside(event));
    window.addEventListener('resize', () => this.handleResize());
  }

  handleButtonClick(event) {
    if (this.isMobileView) {
        this.toggleMenu(event);
    } else {
        event.stopPropagation();
    }
  } 

  handleMouseEnter(event) {
    if (!this.isMobileView()) {
      // Desktop view: Show menu on mouse enter
      this.showMenu(event);
    }
  }

  showMenu(event) {
    event.stopPropagation();


    if (!this.isVisible && !this.isMobileView()) {
      this.menu.classList.remove('hidden');
      setTimeout(() => {
          this.menu.classList.remove('opacity-0', 'scale-95');
          this.menu.classList.add('opacity-100', 'scale-100');
      }, 10);

      this.icon.classList.add('rotate-180');
      this.button.setAttribute('aria-expanded', 'true');
      this.isVisible = true;
    } else if (!this.isVisible && this.isMobileView()) {
      this.menu.classList.remove('hidden');
      this.icon.classList.add('rotate-180');
      this.button.setAttribute('aria-expanded', 'true');
      this.isVisible = true;
    }
  }

  hideMenu() {
    if (this.isVisible && !this.isMobileView()) {
      this.menu.classList.remove('opacity-100', 'scale-100');
      this.menu.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
          this.menu.classList.add('hidden');
      }, 300);

      this.icon.classList.remove('rotate-180');
      this.button.setAttribute('aria-expanded', 'false');
      this.isVisible = false;
    } else if (this.isVisible && this.isMobileView()) {
      setTimeout(() => {
          this.menu.classList.add('hidden');
      }, 30);

      this.icon.classList.remove('rotate-180');
      this.button.setAttribute('aria-expanded', 'false');
      this.isVisible = false;
    }
  } 

  scheduleHideMenu() {
    if (!this.isMobileView()) {
      this.leaveTimeout = setTimeout(() => this.hideMenu(), 300);
    }
  }

  cancelHideMenu() {
    clearTimeout(this.leaveTimeout);
  }

  handleClickOutside(event) {
    if (!this.isMobileView()) {
      if (this.isVisible && !this.button.contains(event.target) && !this.menu.contains(event.target)) {
          this.hideMenu();
      }
    }
  }

  handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768 && this.isVisible) {
      this.hideMenu();
    }
  }

  toggleMenu(event) {
    event.stopPropagation();
    if (this.isVisible) {
        this.hideMenu();
    } else {
        this.showMenu(event);
    }
  }

  isMobileView() {
    return window.innerWidth < 768;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Dropdown('servicesButton', 'servicesMenu', 'servicesChevron');
  new Dropdown('mobileServicesButton', 'mobileServicesMenu', 'mobileServicesChevron');
  new Dropdown('locationsButton', 'locationsMenu', 'locationsChevron');
  new Dropdown('mobileLocationsButton', 'mobileLocationsMenu', 'mobileLocationsChevron');
});