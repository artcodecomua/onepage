        document.addEventListener("DOMContentLoaded", function () {
            const sections = document.querySelectorAll("section");
            const options = { threshold: 0.2 };
            const observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("show");
                        }, index * 300); // Задержка 300 мс между секциями
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            sections.forEach(section => {
                observer.observe(section);
            });
        });
