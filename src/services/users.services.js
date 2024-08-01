import { equalTo, get, orderByChild, query, ref, set } from "firebase/database";
import { db } from "../firebase";

export const getUserByUsername = (username) => {
  return get(ref(db, `users/${username}`));
};

export const createUserUsername = (
  username,
  uid,
  email,
  firstname,
  lastname
) => {
  return set(ref(db, `users/${username}`), {
    username,
    uid,
    email,
    firstname,
    lastname,
    createdOn: new Date(),
    likedPosts: {},
  });
};

export const getUserData = (uid) => {
  return get(query(ref(db, "users"), orderByChild("uid"), equalTo(uid)));
};
