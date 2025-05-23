 // Script simples para scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });

            const sections = document.querySelectorAll("section");
            const navLinks = document.querySelectorAll(".menu-link");

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            link.classList.remove("active");
                            if (link.getAttribute("href").substring(1) === entry.target.id) {
                                link.classList.add("active");
                            }
                        });
                    }
                });
            }, {
                threshold: 0.6 // Ativa quando 50% da seção estiver visível
            });

            sections.forEach(section => observer.observe(section));
        });
