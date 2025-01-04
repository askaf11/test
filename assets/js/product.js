function renderProducts(containerId, products) {
    const productContainer = document.getElementById(containerId);
    productContainer.innerHTML = ""; // Clear existing content

    products.forEach(product => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card-div";

        // Check if the product has a link
        const hasLink = !!product.link;

        cardDiv.innerHTML = hasLink
            ? `
                <a href="${product.link}">
                    <div class="card">
                        <img src="${product.placeholder}" 
                             data-src="${product.image}" 
                             alt="${product.alt}" 
                             class="lazy-load card-img-top">
                        <div class="card-body">
                            <h5 class="card-title font-small">${product.title}</h5>
                        </div>
                    </div>
                </a>
            `
            : `
                <div class="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src="${product.placeholder}" 
                         data-src="${product.image}" 
                         alt="${product.alt}" 
                         class="lazy-load card-img-top">
                    <div class="card-body">
                        <h5 class="card-title font-small">${product.title}</h5>
                    </div>
                </div>
            `;

        productContainer.appendChild(cardDiv);
    });
    initializeLazyLoading();
    appendModal();
}


// Lazy loading implementation
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll(".lazy-load");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Replace placeholder with actual image
                    img.onload = () => img.classList.remove("lazy-load");
                    observer.unobserve(img); // Stop observing after image is loaded
                }
            });
        },
        { rootMargin: "0px", threshold: 0.1 }
    );

    lazyImages.forEach((img) => observer.observe(img));
}


function displayResults() {
    const searchQuery = sessionStorage.getItem("searchQuery");
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "<p>Loading...</p>";

    fetch("assets/data/products.json")
        .then((response) => response.json())
        .then((data) => {
            const allProducts = [...data["Popular-Products"], ...data["Gadgets"], ...data["Mobile-Accessories"], ...data["Laptop-Accessories"], ...data["Cables"], ...data["Desktop-Components"], ...data["Home-Appliances"], ...data["Personal-Care"]];
            const results = allProducts.filter((product) =>
                product.title.toLowerCase().includes(searchQuery)
            );

            if (results.length > 0) {
                renderProducts("results", results);
            } else {
                resultsContainer.innerHTML = "<p>No products found.</p>";
            }
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
            resultsContainer.innerHTML = "<p>Error loading products.</p>";
        });
}

displayResults();

function appendModal() {
    const existingModal = document.getElementById("exampleModal");
    if (!existingModal) {
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = `
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Please Note</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-justify">
                            <p class="mb-3 font-small">
                                <i class="bi bi-x-circle-fill text-danger"></i>
                                <span style="color: #ff5f5f;">Currently we cannot take orders from this website. It is only for viewing product details.</span>
                            </p>
                            <p class="mb-3 font-small">
                                <i class="bi bi-check-circle-fill text-success"></i> Kindly visit our store or contact us to buy a product.
                            </p>
                            <div class="modal-footer">
                                <div class="d-flex justify-content-center gap-3">
                                    <a href="tel:+91 8056863853" class="btn btn-outline-primary d-flex align-items-center gap-2">
                                        <i class="bi bi-telephone-fill"></i> Call Us
                                    </a>
                                    <a href="https://wa.me/918056863853" target="_blank" class="btn btn-success d-flex align-items-center gap-2">
                                        <i class="bi bi-whatsapp"></i> WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalContainer); // Append modal to the body
    }
}





console.log('product.js loaded');
