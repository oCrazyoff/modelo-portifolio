//ROLAGEM PARA O PORTIFOLIO
document.addEventListener('DOMContentLoaded', () => {
    const imgPorts = document.querySelectorAll('.img-port');

    if (window.innerWidth <= 1020) {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { threshold: 0.4 });

        imgPorts.forEach(imgPort => {
            observer.observe(imgPort);
        });

    }
});
