import { createContext } from "react";

const AppContext = createContext({
  user: null,
  userData: null,
  setContext() {},
});

export default AppContext;

