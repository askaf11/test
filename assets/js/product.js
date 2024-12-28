function renderProducts(containerId, products) {
    const productContainer = document.getElementById(containerId);
    productContainer.innerHTML = ""; // Clear existing content

    // Add modal HTML dynamically
    const modalHTML = `
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

    // Ensure modal exists in the container
    if (!document.getElementById("exampleModal")) {
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer); // Append modal to the body
    }

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
}
