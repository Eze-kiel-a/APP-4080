import React from "react";

function ProductListing() {
  return (
    <div className="container">
      <body>
        <header>
          <h1>Our Awesome Marketplace</h1>
        </header>
        <main>
          <section class="product-list">
            <div class="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h2>Product 1</h2>
              <p>Price: $49.99</p>
              <button>Add to Cart</button>
            </div>
          </section>
        </main>
        <footer>
          <p>© 2024 Our Awesome Marketplace</p>
        </footer>
      </body>
    </div>
  );
}

export default ProductListing