document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const currentTheme = savedTheme || systemTheme;
    applyTheme(currentTheme);

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    });

    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        });
    }


    // Mobile Menu Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Password Visibility Toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');

    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const input = toggle.previousElementSibling;
            if (input && input.type === 'password') {
                input.type = 'text';
                toggle.querySelector('i').className = 'fas fa-eye-slash';
            } else if (input && input.type === 'text') {
                input.type = 'password';
                toggle.querySelector('i').className = 'fas fa-eye';
            }
        });
    });

    // Sticky Header Effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Product Details Dynamic Loading
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && typeof productsData !== 'undefined') {
        const product = productsData[productId];
        if (product) {
            // Update Title
            document.title = `${product.name} - ChargeHome`;

            // Update Basic Info
            const nameEl = document.getElementById('product-name');
            const priceEl = document.getElementById('product-price');
            const descEl = document.getElementById('product-description');
            const imageEl = document.getElementById('product-image');
            const badgeEl = document.getElementById('product-badge');

            if (nameEl) nameEl.textContent = product.name;
            if (priceEl) priceEl.textContent = product.price;
            if (descEl) descEl.textContent = product.description;
            if (imageEl) {
                imageEl.src = product.image;
                imageEl.alt = product.name;
            }
            if (badgeEl) {
                badgeEl.textContent = product.power;
            }

            // Update Features
            const featuresList = document.getElementById('product-features');
            if (featuresList && product.features) {
                featuresList.innerHTML = product.features.map(feature => `
                    <li class="flex items-center gap-2">
                        <i class="fas fa-check text-primary"></i> ${feature}
                    </li>
                `).join('');
            }

            // Update Specs
            const specsBody = document.getElementById('product-specs');
            if (specsBody && product.specs) {
                specsBody.innerHTML = Object.entries(product.specs).map(([key, value]) => `
                    <tr>
                        <th class="p-4 bg-surface-2 w-1/3">${key}</th>
                        <td class="p-4">${value}</td>
                    </tr>
                `).join('');
            }
        }
    }

    // Installer Profile Dynamic Loading
    const installerId = urlParams.get('installer');

    if (installerId && typeof installersData !== 'undefined') {
        const installer = installersData[installerId];
        if (installer) {
            // Update Title
            document.title = `${installer.name} - Installer Profile`;

            // Update Basic Info
            const nameEl = document.getElementById('installer-name');
            const locEl = document.getElementById('installer-location');
            const descEl = document.getElementById('installer-description');
            const imageEl = document.getElementById('installer-image');
            const ratingEl = document.getElementById('installer-rating');

            if (nameEl) nameEl.textContent = installer.name;
            if (locEl) locEl.textContent = installer.location;
            if (descEl) descEl.textContent = installer.description;
            if (imageEl) {
                imageEl.src = installer.image;
                imageEl.alt = installer.name;
            }
            if (ratingEl) ratingEl.textContent = installer.rating;

            // Update Contact Info
            const phoneEl = document.getElementById('installer-phone');
            const emailEl = document.getElementById('installer-email');
            const webEl = document.getElementById('installer-website');

            if (phoneEl) phoneEl.textContent = installer.contact.phone;
            if (emailEl) emailEl.textContent = installer.contact.email;
            if (webEl) webEl.textContent = installer.contact.website;

            // Update Services
            const servicesList = document.getElementById('installer-services');
            if (servicesList && installer.services) {
                servicesList.innerHTML = installer.services.map(service => `
                    <li class="flex items-center gap-2 text-sm">
                        <i class="fas fa-check-circle text-primary"></i> ${service}
                    </li>
                `).join('');
            }

            // Update Reviews
            const reviewsList = document.getElementById('installer-reviews');
            if (reviewsList && installer.reviews) {
                reviewsList.innerHTML = installer.reviews.map(review => `
                    <div class="card p-4 bg-surface-2 border-none">
                        <div class="flex justify-between mb-2">
                            <span class="font-bold">${review.user}</span>
                            <div class="text-accent text-xs">
                                ${Array(5).fill(0).map((_, i) => `<i class="${i < review.rating ? 'fas' : 'far'} fa-star"></i>`).join('')}
                            </div>
                        </div>
                        <p class="text-sm text-muted">"${review.comment}"</p>
                    </div>
                `).join('');
            }

            // Check if we should scroll to contact
            if (urlParams.get('action') === 'contact') {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                    setTimeout(() => {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                        contactSection.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.3)';
                    }, 500);
                }
            }
        }
    }

    // Back to Top Button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
