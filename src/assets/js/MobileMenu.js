class MobileMenu {
  constructor(buttonId, menuId, iconId) {
    this.button = document.getElementById(buttonId);
    this.menu = document.getElementById(menuId);
  
    this.isVisible = false;
    
    this.button.addEventListener('click', () => this.toggleMenu());
    window.addEventListener('resize', () => this.handleResize());
  }

  toggleMenu() {
    if (this.isVisible) {
      this.menu.classList.remove('opacity-100', 'scale-100');
      this.menu.classList.add('opacity-0', 'scale-95');

      setTimeout(() => {
        this.menu.classList.add('hidden');
      }, 300);
      document.body.classList.remove('overflow-hidden');

    }
    else {
      this.menu.classList.remove('hidden');
      
      setTimeout(() => {
        this.menu.classList.remove('opacity-0', 'scale-95');
        this.menu.classList.add('opacity-100', 'scale-100');
      }, 10);
      document.body.classList.add('overflow-hidden');

    }
    this.isVisible= !this.isVisible;
  }

  handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768 && this.isVisible) {
      this.toggleMenu();
    }
  }

}

document.addEventListener('DOMContentLoaded', () => {
  new MobileMenu('mobileButton', 'mobileMenu');
})