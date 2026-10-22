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
// Проекты: клик по пункту делает его активным и меняет скриншот в панели
const fpItems = document.querySelectorAll('[data-fp-item]');
const fpMedia = document.querySelectorAll('.fp-media');
let fpActive = 0;

function setProject(index) {
    if (index === fpActive) return;

    fpItems.forEach((item, i) => {
        item.classList.toggle('is-active', i === index);
        item.querySelector('.fp-head').setAttribute('aria-expanded', String(i === index));
    });

    const prev = fpMedia[fpActive];
    prev.classList.remove('is-active');
    prev.classList.add('is-leaving');
    setTimeout(() => prev.classList.remove('is-leaving'), 350);

    fpMedia[index].classList.remove('is-leaving');
    fpMedia[index].classList.add('is-active');
    fpMedia.forEach((m, i) => m.setAttribute('aria-hidden', String(i !== index)));

    fpActive = index;
}

fpItems.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        if (!e.target.closest('a')) setProject(i);
    });
});
