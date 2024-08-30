import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import {
  dislikeProduct,
  getLikedProducts,
  likeProduct,
} from "../services/product.services";
import { SingleProductCard } from "../components";

export const Favorite = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (user) {
      getLikedProducts(user).then(setProducts).catch(console.error);
    } else {
      console.log("Not working");
    }
  }, [user]);

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

  return (
    <div className="container mt-3">
      <div className="row">
        {products.length === 0 ? (
          <h1>No products</h1>
        ) : (
          products
            .sort((a, b) => b.createdOn - a.createdOn)
            .map((product, key) => (
              <SingleProductCard
                key={key}
                product={product}
                like={like}
                dislike={dislike}
              />
            ))
        )}
      </div>
    </div>
  );
};
