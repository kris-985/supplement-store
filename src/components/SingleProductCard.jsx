export const SingleProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow red-shadow border-3 border border-danger">
        <img
          src={product.picture || "https://via.placeholder.com/150"}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{product.name}</h5>
            <span>{"⭐".repeat(product.stars)}</span>
          </div>
          <p className="card-text flex-grow-1">{product.description}</p>
          <h6 className="card-subtitle mb-2 text-muted">
            ${product.price.toFixed(2)}
          </h6>
          <button
            className="btn btn-danger mt-auto"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-danger mt-auto"
            onClick={() => handleAddToCart(product)}
          >
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
};
