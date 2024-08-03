import { createContext } from "react";

// email: "kris78@abv.bg";
// firstname: "kris";
// lastname: "kris";
// role: "user";
// shippingAdress: "''";
// uid: "O2IL09Yb31bMhioCHYcHayhybmY2";
// username: "demo88";

const AppContext = createContext({
  user: null,
  userData: null,
  setContext() {},
});

export default AppContext;
