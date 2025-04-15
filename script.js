document.addEventListener('DOMContentLoaded', function () {
    const emergeElements = document.querySelectorAll('.emerge');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve the element after it has appeared:
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    emergeElements.forEach(el => {
        observer.observe(el);
    });
});

window.addEventListener('scroll', function () {
    const scrollPos = window.pageYOffset;
    // Multiply by a small factor (e.g. 0.05) to achieve subtle movement.
    document.querySelector('.parallax').style.top = (scrollPos * -0.25) + 'px';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});