import { get, onValue, push, ref, update } from "firebase/database";
import { db } from "../firebase";

export const fromProductsDocument = (snapshot) => {
  const productsDocument = snapshot.val();

  return Object.keys(productsDocument).map((key) => {
    const product = productsDocument[key];
    return {
      ...product,
      id: key,
      createdOn: new Date(product.createdOn),
      likedBy: product.likedBy ? Object.keys(product.likedBy) : [],
    };
  });
};

export const getAllProducts = () => {
  return get(ref(db, "products")).then((snapshot) => {
    if (!snapshot.exists()) return [];

    return fromProductsDocument(snapshot);
  });
};

export const getLiveTweets = (listen) => {
  return onValue(ref(db, "products"), listen);
};

export const addProduct = (content, username) => {
  return push(ref(db, "products"), {
    content: { ...content },
    addedBy: username,
    createdOn: Date.now(),
    rating: 0,
  }).then((result) => {
    return result.key;
  });
};

export const updateProduct = (id, content) => {
  return update(ref(db, `products/${id}`), { content });
};

export const getproductById = (id) => {
  return get(ref(db, `products/${id}`)).then((result) => {
    if (!result.exists()) {
      throw new Error(`product with id ${id} does not exist!`);
    }

    const product = result.val();
    product.id = id;
    product.createdOn = new Date(product.createdOn);
    if (!product.likedBy) {
      product.likedBy = [];
    } else {
      product.likedBy = Object.keys(product.likedBy);
    }

    return product;
  });
};

export const likeProduct = (username, productId) => {
  const updateLikes = {};
  updateLikes[`/products/${productId}/likedBy/${username}`] = true;
  updateLikes[`/users/${username}/likedProducts/${productId}`] = true;

  return update(ref(db), updateLikes);
};

export const dislikeProduct = (username, productId) => {
  const updateLikes = {};
  updateLikes[`/products/${productId}/likedBy/${username}`] = null;
  updateLikes[`/users/${username}/likedProducts/${productId}`] = null;

  return update(ref(db), updateLikes);
};

export const getLikedProducts = (username) => {
  return get(ref(db, `users/${username}`)).then((snapshot) => {
    if (!snapshot.val()) {
      throw new Error(`User with username ${username} does not exist!`);
    }

    const user = snapshot.val();
    if (!user.likedProducts) return [];

    return Promise.all(
      Object.keys(user.likedProducts).map((key) => {
        return get(ref(db, `products/${key}`)).then((snapshot) => {
          const product = snapshot.val();
          if (snapshot) {
            return {
              ...product,
              id: key,
              createdOn: new Date(product.createdOn),
              likedBy: product.likedBy ? Object.keys(product.likedBy) : [],
            };
          }
        });
      })
    );
  });
};

export const getPurchasedProducts = async (username) => {
  try {
    const userSnapshot = await get(ref(db, `users/${username}`));
    if (!userSnapshot.exists()) {
      throw new Error(`User with username ${username} does not exist!`);
    }

    const user = userSnapshot.val();
    if (!user.purchasedProducts) return [];

    const productPromises = Object.keys(user.purchasedProducts).map(
      async (key) => {
        const productSnapshot = await get(ref(db, `products/${key}`));
        if (productSnapshot.exists()) {
          const product = productSnapshot.val();
          return {
            ...product,
            id: key,
            createdOn: new Date(product.createdOn),
            likedBy: product.likedBy ? Object.keys(product.likedBy) : [],
          };
        }
      }
    );

    const products = await Promise.all(productPromises);
    return products.filter((product) => product !== undefined);
  } catch (error) {
    console.error("Error fetching purchased products:", error);
    return [];
  }
};

export const updatePurchasedProducts = (username, purchasedProducts) => {
  const updates = {};
  updates[`/users/${username}/purchasedProducts`] = purchasedProducts;

  return update(ref(db), updates);
};