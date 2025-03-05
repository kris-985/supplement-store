import { useContext, useEffect, useState } from "react";
import { SingleProductCard } from "../components";
import {
  dislikeProduct,
  fromProductsDocument,
  getAllProducts,
  getLiveTweets,
  likeProduct,
} from "../services/product.services";
import AppContext from "../context/AppContext";

export const Products = () => {
  const { user } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts).catch(console.error);
  }, []);

  useEffect(() => {
    const unsubscribe = getLiveTweets((snapshot) => {
      if (snapshot.exists()) setProducts(fromProductsDocument(snapshot));
    });

    return () => unsubscribe();
  }, []);

  const like = (product) => {
    likeProduct(user, product.id).then(() => {
      setProducts(
        products.map((p) => {
          if (p.id === product.id) {
            p.likedBy.push(user);
          }
          return p;
        })
      );
    });
  };

  const dislike = (product) => {
    dislikeProduct(user, product.id).then(() => {
      setProducts(
        products.map((t) => {
          if (t.id === product.id) {
            t.likedBy = t.likedBy.filter((h) => h !== user);
          }
          return t;
        })
      );
    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.content.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control border-3 border border-danger"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="row">
        {!filteredProducts.length ? (
          <h1>No Products</h1>
        ) : (
          filteredProducts.map((product, index) => (
            <SingleProductCard
              key={index}
              product={product}
              handleAddToCart={() => console.log("hello")}
              like={like}
              dislike={dislike}
            />
          ))
        )}
      </div>
    </div>
  );
};
