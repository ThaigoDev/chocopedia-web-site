document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    
    // Lógica para abrir/fechar o menu mobile
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    });

    // Adiciona fundo ao header ao rolar
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // --- INÍCIO DA LÓGICA DO SLIDER DE DEPOIMENTOS ---
    const slider = document.querySelector('.testimonial-slider');
    if (slider) { // Verifica se o slider existe na página
        const slides = document.querySelectorAll('.testimonial-card');
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSliderPosition() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        });
        
        // Inicializa o slider na posição correta
        updateSliderPosition();
    }
    // --- FIM DA LÓGICA DO SLIDER ---

});