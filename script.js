function showProductDetails(productId) {
  const productDetails = {
    "look_polo": {
      name: "Look Polo",
      price: "€45.00",
      description:
        "Premium cotton oversized t-shirt with minimalist design. Perfect for streetwear looks.",
      sizes: "S, M, L, XL, XXL",
      material: "100% Organic Cotton",
      care: "Machine wash cold, tumble dry low",
      images: [
        "./imgs/look_polo/1.jpg",
        "./imgs/look_polo/2.jpg",
        "./imgs/look_polo/3.jpg",
      ],
    },
    "cargo-pants": {
      name: "Cargo Pants",
      price: "€89.00",
      description:
        "Tactical-inspired cargo pants with multiple pockets and adjustable fit.",
      sizes: "28, 30, 32, 34, 36, 38",
      material: "Cotton Ripstop Blend",
      care: "Machine wash warm, hang dry",
      images: [
        "https://via.placeholder.com/150?text=Cargo+Pants+1",
        "https://via.placeholder.com/150?text=Cargo+Pants+2",
      ],
    },
    Goyard_Clutch: {
      name: "Essential Goyard Clutch",
      price: "€75.00",
      description:
        "Classic pullover Goyard Clutch with soft fleece lining and kangaroo pocket.",
      sizes: "XS, S, M, L, XL, XXL",
      material: "80% Cotton, 20% Polyester",
      care: "Machine wash cold, tumble dry low",
      images: [
        "imgs/goyard_clutch/1.jpg",
        "imgs/goyard_clutch/3.jpg",
        "imgs/goyard_clutch/2.jpg",
      ],
    },
    cap: {
      name: "Logo Cap",
      price: "€35.00",
      description:
        "Adjustable snapback cap with embroidered logo and curved brim.",
      sizes: "One Size Fits All",
      material: "100% Cotton Twill",
      care: "Spot clean only",
      images: [
        "https://via.placeholder.com/150?text=Logo+Cap+1",
        "https://via.placeholder.com/150?text=Logo+Cap+2",
      ],
    },
    jacket: {
      name: "Bomber Jacket",
      price: "€120.00",
      description:
        "Classic bomber jacket with ribbed cuffs and hem, zip closure.",
      sizes: "S, M, L, XL, XXL",
      material: "Nylon Shell, Polyester Lining",
      care: "Dry clean only",
      images: [
        "https://via.placeholder.com/150?text=Bomber+Jacket+1",
        "https://via.placeholder.com/150?text=Bomber+Jacket+2",
        "https://via.placeholder.com/150?text=Bomber+Jacket+3",
      ],
    },
    sneakers: {
      name: "Street Sneakers",
      price: "€95.00",
      description:
        "Comfortable street sneakers with cushioned sole and premium materials.",
      sizes: "38, 39, 40, 41, 42, 43, 44, 45",
      material: "Leather Upper, Rubber Sole",
      care: "Wipe clean with damp cloth",
      images: [
        "https://via.placeholder.com/150?text=Sneakers+1",
        "https://via.placeholder.com/150?text=Sneakers+2",
      ],
    },
  };

  const product = productDetails[productId];

  if (product) {
    const imagesHTML = product.images
      ? `<div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
           ${product.images
             .map(
               (img) =>
                 `<img src=${img} alt="${product.name}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 5px;">`
             )
             .join("")}
         </div>`
      : "";
    console.log(product);

    const detailsHTML = `
            <div style="text-align: left;">
                ${imagesHTML}
                <h2 style="margin-bottom: 1rem; color: #000;">${
                  product.name
                }</h2>
                <p style="font-size: 1.3rem; color: #666; margin-bottom: 1rem; font-weight: bold;">${
                  product.price
                }</p>
                <p style="margin-bottom: 1rem; line-height: 1.6;">${
                  product.description
                }</p>
                <p style="margin-bottom: 0.5rem;"><strong>Available Sizes:</strong> ${
                  product.sizes
                }</p>
                <p style="margin-bottom: 0.5rem;"><strong>Material:</strong> ${
                  product.material
                }</p>
                <p style="margin-bottom: 1.5rem;"><strong>Care Instructions:</strong> ${
                  product.care
                }</p>
                <button onclick="addToCart('${productId}', ${product.price
      .replace("€", "")
      .replace(".00", "")})" 
                        style="background: #000; margin-top: 1rem; color: white; padding: 1rem 2rem; border: none; cursor: pointer; font-weight: bold; letter-spacing: 1px; margin-right: 1rem;">
                    ADD TO CART
                </button>
                <button onclick="closeDetails()" 
                        style="background: #666; margin-top: 1rem; color: white; padding: 1rem 2rem; border: none; cursor: pointer; font-weight: bold; letter-spacing: 1px;">
                    CLOSE
                </button>
            </div>
        `;

    showModal(detailsHTML);
  }
}

function showModal(content) {
  const modal = document.createElement("div");
  modal.id = "product-modal";
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

  const modalContent = document.createElement("div");
  modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 10px;
        max-width: 600px; /* Increased to accommodate images */
        width: 90%;
        max-height: 85vh; /* Adjusted for taller content */
        overflow-y: auto;
        position: relative;
    `;

  modalContent.innerHTML = content;
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    modal.style.opacity = "1";
  }, 100);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeDetails();
    }
  });
}

function closeDetails() {
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.style.opacity = "0";
    document.body.style.overflow = "";
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
}