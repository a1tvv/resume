// Автоматическое обновление года в подвале
document.getElementById('year').textContent = new Date().getFullYear();

// Эффект появления элементов при прокрутке (опционально, но выглядит круто)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Применяем анимацию к карточкам проектов и навыкам
document.querySelectorAll('.skill-category, .project-card, .timeline li').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});