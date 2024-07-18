import React from 'react'
import Header from '../../components/Header/Header'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import { useState, useEffect } from "react";
import { publicRequest } from "../../utils/requestMethod";
import { useLocation } from 'react-router-dom';
import './Product.css'
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { toast } from 'react-toastify';

const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct()
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'desc') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(
      addToCart({ ...product, quantity })
    )
    toast.dark(`Successfully added ${quantity}x  ${product.title} to your cart`, {
      // theme: "colored",
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false,
    })
  };


  return (
    <>
      <Header />
      <Announcement />

      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img src={product.img} alt="" />
            </div>
            <div className="right">
              <span className="name">{product.title}</span>
              <span className="qty">{product.qty}</span>
              <span className="price">&#8377; {product.price}</span>
              <span className="desc">{product.desc}</span>

              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span onClick={() => handleQuantity("desc")}><RemoveIcon /></span>
                  <span>{quantity}</span>
                  <span onClick={() => handleQuantity("inc")}><AddIcon /></span>
                </div>
                <button className="add-to-cart-button" onClick={handleClick}>
                  <AddShoppingCartIcon size={20} />
                  Add to cart
                </button>
              </div>

              <span className="divider" />
              <div className="info-item">

                {/* <span className="text-bold">
                                    Share:
                                    <span className="socail-icons">
                                        <FaLinkedinIn size={16} />
                                        <FaFacebookF size={16} />
                                        <FaPinterest size={16} />
                                        <FaInstagram size={16} />
                                        <FaTwitter size={16} />
                                    </span>
                                </span> */}
              </div>

            </div>
          </div>
          {/* <RelatedProducts productId={id} categoryId={product.categories.data[0].id} /> */}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Product
