// Год в подвале
document.getElementById('year').textContent = new Date().getFullYear();

// Дата «ревизии» в шапке hero (формат datasheet: ГГГГ.ММ)
const now = new Date();
const rev = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}`;
const revEl = document.getElementById('rev-date');
if (revEl) revEl.textContent = rev;

// Появление элементов при прокрутке
const reveal = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    reveal.forEach((el) => io.observe(el));
} else {
    reveal.forEach((el) => el.classList.add('in'));
}