import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product/Product";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUp";
import Cart from "./pages/Cart/Cart";
import ContactUs from "./pages/ContactPage/ContactUs";
import ProductList from "./pages/ProductList/ProductList";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <LoginPage />}
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
