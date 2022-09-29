import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { GlobalProvider } from "./context/GlobalContext";
import AllProducts from "./pages/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart";
import Confirmation from "./pages/Confirmation/Confirmation";
import Favourite from "./pages/Favourite/Favourite";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <GlobalProvider>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/favourite" element={<Favourite/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/all-products" element={<AllProducts/>} />
            <Route path="/confirmation" element={<Confirmation/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
       
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
