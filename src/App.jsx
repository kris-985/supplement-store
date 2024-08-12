import { Fragment, useEffect, useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Account, Login, NavBar, SignUp, AddProduct } from "./components";
import { About, Contacts, Home, Products, Cart, Favorite } from "./pages";
import { auth } from "./firebase";
import { getUserData } from "./services/users.services";
import { useAuthState } from "react-firebase-hooks/auth";
import AppContext from "./context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [appState, setAppState] = useState({
    user: null,
    userData: null,
  });

  let [user, loading] = useAuthState(auth);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    if (user === null) return;
    getUserData(user.uid)
      .then((snapshot) => {
        if (!snapshot.exists()) return;
        const data = snapshot.val()[Object.keys(snapshot.val())[0]];
        setAppState({
          user: data.username,
          userData: data,
        });
      })
      .catch((e) => alert(e.message));
  }, [user]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContext.Provider value={{ ...appState, setContext: setAppState }}>
      {loading || showSpinner ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Fragment>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Fragment>
      )}
    </AppContext.Provider>
  );
}

export default App;
