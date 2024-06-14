class MenuDropdown {
  constructor(buttonId, menuId, iconId) {
    
    this.button = document.getElementById(buttonId);
    this.menu = document.getElementById(menuId);
    this.icon = document.getElementById(iconId);
    this.isVisible = false;

    this.button.addEventListener('click', () => this.toggleMenu());
    document.addEventListener('click', (event) => this.handleClickOutside(event));
    window.addEventListener('resize', () => this.handleResize());
  }

  toggleMenu() {
    if (this.isVisible) {
      this.menu.classList.remove('opacity-100', 'scale-100');
      this.menu.classList.add('opacity-0', 'scale-95');

      setTimeout(() => {
        this.menu.classList.add('hidden');
      }, 300);
      this.icon.classList.remove('rotate-180');
    }
    else {
      this.menu.classList.remove('hidden');
      
      setTimeout(() => {
        this.menu.classList.remove('opacity-0', 'scale-95');
        this.menu.classList.add('opacity-100', 'scale-100');
      }, 10);
      this.icon.classList.add('rotate-180');
    }
    this.isVisible= !this.isVisible;
  }

  handleClickOutside(event) {
    if (this.isVisible && !this.button.contains(event.target) && !this.menu.contains(event.target)) {
      this.toggleMenu();
    }
  }

  handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768 && this.isVisible) {
      this.toggleMenu();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MenuDropdown('dropdownButton', 'dropdownMenu', 'chevronIcon');
});