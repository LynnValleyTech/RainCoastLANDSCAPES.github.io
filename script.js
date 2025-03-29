document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Dynamic content loading
    const servicesData = [
        {
            title: "Landscape Design",
            description: "Custom designs tailored to your property's unique characteristics and your personal style.",
            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Hardscaping",
            description: "Patios, walkways, retaining walls, and other structural elements to enhance your outdoor living space.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Planting Services",
            description: "Selection and installation of native plants, trees, and shrubs suited to Vancouver's climate.",
            image: "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];
    
    const projectsData = [
        {
            title: "West Vancouver Modern Garden",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Kitsilano Backyard Transformation",
            image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Downtown Commercial Plaza",
            image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];
    
    const testimonialsData = [
        {
            quote: "RainCoast completely transformed our backyard into an oasis. Their attention to detail and plant knowledge was impressive.",
            name: "Sarah J.",
            location: "North Vancouver",
            image: "https://randomuser.me/api/portraits/women/43.jpg"
        },
        {
            quote: "From design to completion, the team was professional and creative. We get compliments on our garden daily!",
            name: "Michael T.",
            location: "Burnaby",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    ];
    
    // Populate services
    const servicesGrid = document.querySelector('.services-grid');
    servicesData.forEach(service => {
        servicesGrid.innerHTML += `
            <div class="service-card">
                <img src="${service.image}" alt="${service.title}">
                <div class="service-card-content">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            </div>
        `;
    });
    
    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');
    projectsData.forEach(project => {
        projectsGrid.innerHTML += `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-card-overlay">
                    <h3>${project.title}</h3>
                </div>
            </div>
        `;
    });
    
    // Populate testimonials
    const testimonialGrid = document.querySelector('.testimonial-grid');
    testimonialsData.forEach(testimonial => {
        testimonialGrid.innerHTML += `
            <div class="testimonial-card">
                <p>"${testimonial.quote}"</p>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                    <div>
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.location}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
