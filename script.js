// Inicialización de Animaciones
AOS.init({ duration: 1000, once: true });

// Efecto scroll en Navbar - MODIFICADO PARA SER VISIBLE SIEMPRE
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        nav.style.padding = '15px 0';
        nav.style.background = 'rgba(15, 15, 15, 0.95)';
    }
});

// --- CERRAR MENÚ MÓVIL AUTOMÁTICAMENTE ---
document.addEventListener('click', (e) => {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    });
});