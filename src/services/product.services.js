import { get, onValue, push, ref, set, update } from "firebase/database";
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
  return get(ref(db, `users/${username}/cart`)).then((snapshot) => {
    if (!snapshot.exists()) return {};
    console.log(snapshot.val());
    return snapshot.val();
  });
};

export const saveOrderHistory = async (
  username,
  products,
  totalPrice,
  shippingAddress
) => {
  const order = {
    products,
    totalPrice,
    shippingAddress,
    orderDate: new Date().toISOString(),
  };

  const newOrderRef = push(ref(db, `users/${username}/orderhistory`));
  await update(newOrderRef, order);
  const cart = `users/${username}/cart`;
  await update(ref(db), { [cart]: null });
};

export const getOrderHistory = async (username) => {
  return get(ref(db, `users/${username}/orderhistory`)).then((snapshot) => {
    if (!snapshot.exists()) return [];

    const orders = snapshot.val();
    console.log("Order history fetched:", orders);

    return Object.values(orders).map((order) => ({
      ...order,
      products: Array.isArray(order.products) ? order.products : [],
    }));
  });
};

export const addToCart = async (user, product, quantity) => {
  const updates = {};
  updates[`/users/${user}/cart/${product.id}`] = { ...product, quantity };

  await update(ref(db), updates);
};

export const renderFavorite = async (isProductFavorite, user, product) => {
  const updates = {};
  if (isProductFavorite) {
    updates[`/users/${user}/favorites/${product.id}`] = null;
  } else {
    updates[`/users/${user}/favorites/${product.id}`] = product;
  }
  await update(ref(db), updates);
};

export const setShoppingCart = (username, product) => {
  return set(ref(db, `users/${username}/cart`), { ...product });
};
