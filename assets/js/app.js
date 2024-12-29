
document.getElementById('NavBar').innerHTML = `<nav class="navbar navbar-expand-sm custom-background navbar-light fixed-top">
    <div class="container-fluid d-flex justify-content-between">
        <a href="/">
            <img src="https://nsdcomputers.com/assets/img/logo_2.png" class="nav-logo"
                style="width:55px; border-radius: 5px; object-fit: cover;" alt="NSD Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
            aria-label="Nav bar toggle button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul class="navbar-nav text-center">
                <li class="nav-item dropdown px-3 font-small">
                    <a class="nav-link dropdown-toggle" href="/popular-products" id="accessoriesDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Devices
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="accessoriesDropdown">
                        <li><a class="dropdown-item" href="/desktop">Desktop</a></li>
                        <li><a class="dropdown-item" href="/laptop">Laptop</a></li>
                        <li><a class="dropdown-item" href="/mobile">Mobile</a></li>
                    </ul>
                </li>
                <li class="nav-item px-3 font-small">
                    <a class="nav-link" href="/laptop">Laptop</a>
                </li>
                <li class="nav-item px-3 font-small">
                    <a class="nav-link" href="/mobile">Mobile</a>
                </li>
                <li class="nav-item dropdown px-3 font-small">
                    <a class="nav-link dropdown-toggle" href="#" id="accessoriesDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Accessories
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="accessoriesDropdown">
                        <li><a class="dropdown-item" href="/accessories/keyboards">Keyboards</a></li>
                        <li><a class="dropdown-item" href="/accessories/mice">Mice</a></li>
                        <li><a class="dropdown-item" href="/accessories/headphones">Headphones</a></li>
                    </ul>
                </li>
                <li class="nav-item px-3 font-small">
                    <a class="nav-link" href="/home-appliances">Home Appliances</a>
                </li>
                <li class="nav-item px-3 font-small">
                    <a class="nav-link" href="#services">Services</a>
                </li>
                <li class="nav-item px-3 font-small">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

// Function to initialize the breadcrumb
function initializeBreadcrumb() {
    const breadcrumbElement = document.getElementById('breadcrumb').querySelector('ol');
    const pathSegments = window.location.pathname.split('/').filter(segment => segment);

    // Define breadcrumb items based on the current page
    let breadcrumbItems = [
        { name: 'Home', link: '/' }
    ];

    // Create breadcrumb items for additional segments
    pathSegments.forEach((segment, index) => {
        const pageName = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '); // Capitalize first letter and replace hyphens with spaces
        const link = '/' + pathSegments.slice(0, index + 1).join('/');

        breadcrumbItems.push({ name: pageName, link: link });
    });

    // Clear existing breadcrumb items
    breadcrumbElement.innerHTML = '';

    // Build the breadcrumb HTML
    breadcrumbItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'breadcrumb-item font-super-small';
        
        if (index < breadcrumbItems.length - 1) {
            li.innerHTML = `<a href="${item.link}">${item.name}</a>`;
        } else {
            li.classList.add('active');
            li.setAttribute('aria-current', 'page');
            li.innerText = item.name;
        }

        breadcrumbElement.appendChild(li);
    });
}

// Call the function to initialize the breadcrumb after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeBreadcrumb);


 // Lazy load script
 document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy-load");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Swap placeholder with actual image
                img.classList.remove("lazy-load"); // Optional: remove lazy class
                observer.unobserve(img); // Stop observing the image
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: 0.05 // Load when 10% of the image is visible
    });

    lazyImages.forEach(img => observer.observe(img));
});

// contact.js

// Function to initialize the contact section
function initializeContactSection() {
    // Check if the user is on the home page
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html'; // Adjust the condition as needed

    // Create the contact section HTML
    let contactSectionHTML = `
        <div id="Contact-Section"></div>
        <div class="services-head">
            <h2 class="font-large">Contact Us</h2>
        </div>
        <div class="contact-flex">
            <div class="contact-card">
                <div>
                    <i class="bi bi-telephone-fill"></i>
                    <a href="tel:+91 8056863853" class="nav-contact font-small">+91 8056863853</a>
                    <a href="#"> | </a>
                    <a href="tel:+91 8870384736" class="nav-contact font-small">+91 8870384736</a>
                </div>
                <div>
                    <i class="bi bi-telephone-fill"></i>
                    <a href="tel:04449787769" class="nav-contact font-small">04449787769</a>
                </div>
                <div>
                    <i class="bi bi-envelope-open-fill"></i>
                    <a href="mailto:nsdcompele2024@gmail.com" class="nav-contact font-small">
                        nsdcompele2024@gmail.com</a>
                </div>
                <div>
                    <i class="bi bi-geo-alt-fill"></i>
                    <a href="https://maps.app.goo.gl/VXdfQkadVQzjfXWY6" class="nav-contact font-small">Maduravoyal,
                        Chennai</a>
                </div>
            </div>`;

    // Conditionally add the map-card section
    if (isHomePage) {
        contactSectionHTML += `
            <div class="map-card">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6153297092055!2d80.17729709999999!3d13.060139800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611cf4ca9321%3A0xed2fd83e6a7672f6!2sNSD%20COMPUTERS%20AND%20ELECTRONICS!5e0!3m2!1sen!2sin!4v1734593151448!5m2!1sen!2sin"
                    width="100%" height="300" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>`;
    }

    // Close the contact-flex div
    contactSectionHTML += `
        </div>
    `;

    // Set the inner HTML of the contact section
    document.getElementById('contact').innerHTML = contactSectionHTML;
}

// Call the function to initialize the contact section after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeContactSection);


document.getElementById('WhatsApp').innerHTML = `
<a href="https://wa.me/918056863853" class="call-icon">
        <i class="bi bi-whatsapp"></i>
    </a>
`;

document.getElementById('Footer').innerHTML = `
<footer class="custom-background">
        <div class="footer-icon-div">
            <span class="footer-icon-span"><a href="#" target="_blank">
                    <i class="bi bi-facebook footer-icon"></i></a>
            </span>
            <span class="footer-icon-span"><a href="https://www.instagram.com/nsdcomputers" target="_blank">
                    <i class="bi bi-instagram footer-icon"></i></a>
            </span>
        </div>
       <div class="footer-credits text-center p-3">
    <span class="font-small">
        Images by: 
        <a href="https://www.freepik.com" target="_blank">Freepik</a> and 
        <a href="https://www.vecteezy.com" target="_blank">Vecteezy</a>
    </span>
    <div class="my-2"></div> <!-- Vertical gap -->
    <span class="font-small">
        Design by <a href="https://askaf.in/" class="text-decoration-none">Askaf</a>
    </span>
    <div class="my-2"></div> <!-- Vertical gap -->
    <span class="font-small">
        <i class="bi bi-c-circle"></i> 2025 NSD Computers & Electronics. All rights reserved.
    </span>
</div>

</footer>
`;