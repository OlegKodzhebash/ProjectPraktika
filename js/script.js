// hamburger-menu.js

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const desktopMenu = nav.querySelector('ul');
    desktopMenu.classList.add('desktop-menu');

    const hamburgerBtn = document.createElement('div');
    hamburgerBtn.className = 'hamburger';
    hamburgerBtn.id = 'hamburger';
    hamburgerBtn.innerHTML = `<span></span><span></span><span></span>`;
    nav.appendChild(hamburgerBtn);

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.id = 'mobileMenu';
    mobileMenu.innerHTML = `
        <button class="close-btn" id="closeBtn">
            <i class="fas fa-times"></i>
        </button>
        <ul>
            <li><a href="#home" class="menu-link">🏠 Главная</a></li>
            <li><a href="#catalog" class="menu-link">🌸 Каталог</a></li>
            <li><a href="#about" class="menu-link">ℹ️ О нас</a></li>
            <li><a href="#delivery" class="menu-link">🚚 Доставка</a></li>
            <li><a href="#contacts" class="menu-link">⭐ Популярное</a></li>
        </ul>
    `;
    document.body.appendChild(mobileMenu);

    const hamburger = document.getElementById('hamburger');
    const mobileMenuElement = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');
    const overlayElement = document.getElementById('overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    function openMobileMenu() {
        hamburger.classList.add('active');
        mobileMenuElement.classList.add('active');
        overlayElement.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileMenuElement.classList.remove('active');
        overlayElement.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    hamburger.addEventListener('click', openMobileMenu);
    closeBtn.addEventListener('click', closeMobileMenu);
    overlayElement.addEventListener('click', closeMobileMenu);
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) closeMobileMenu();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMobileMenu();
    });
});
