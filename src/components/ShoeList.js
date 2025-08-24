import React from "react";

export default function ShoeList({ shoes, addToCart }) {
  return (
    <div>
      <h2 className="mb-4">Available Shoes</h2>
      <div className="row">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={shoe.image}
                className="card-img-top"
                alt={shoe.name}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{shoe.name}</h5>
                <p className="card-text text-muted">${shoe.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addToCart(shoe)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
