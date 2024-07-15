<<<<<<< HEAD
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

//ROLAGEM PARA OS DIFERENCIAIS
document.addEventListener('DOMContentLoaded', () => {
    const dif = document.querySelectorAll('.diferenciais-box');

    if (window.innerWidth <= 1020) {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { threshold: 0.8});

        dif.forEach(dif => {
            observer.observe(dif);
        });

    }
});
=======
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

//ROLAGEM PARA OS DIFERENCIAIS
document.addEventListener('DOMContentLoaded', () => {
    const dif = document.querySelectorAll('.diferenciais-box');

    if (window.innerWidth <= 1020) {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { threshold: 0.8});

        dif.forEach(dif => {
            observer.observe(dif);
        });

    }
});
>>>>>>> 7bf2e4a6dafc0dffd783e7b37f4c034dda418afa
