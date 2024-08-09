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
