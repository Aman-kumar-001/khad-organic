import { useEffect, useRef, useState } from "react";
import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from "react-router-dom";
import logo from "../../assests/khaorganic-logo1.jpg";
import MenuIcon from '@mui/icons-material/Menu';
import Search from "../Search/Search.jsx";
import { useSelector } from "react-redux";
import Categories from '../Categories/Categories'
import { logout } from '../../redux/userSlice.js'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const quantity = useSelector((state) => state.cart.quantity);
    const menuRef = useRef();
    const [showSearch, setShowSearch] = useState(false);
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('center-visible');
        e.target.classList.toggle('open');
    }
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        toast.success('Logged out successfully', {
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
            theme: "colored",
        })
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
            setIsActive(false);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <img className="logo" src={logo} alt="" />
                    </ul>
                    <div onClick={dropdown_toggle} className="hamburger-menu">
                        <MenuIcon style={{ fontSize: "40px" }} />
                    </div>
                    <div ref={menuRef} className="center" >
                        <li onClick={() => navigate("/")}>Home</li>
                        <li className="dropdown" onClick={(e) => { setIsActive(!isActive) }}>
                            <div className="dropdown-btn" >
                                Products
                                <ArrowDropDownIcon />
                            </div>
                            {isActive && (
                                <div className="dropdown-content">
                                    <Categories />
                                </div>
                            )}
                        </li>
                        <li>About</li>
                        <li onClick={() => navigate("/contactUs")}>Contact</li>
                        {
                            !user ? (<li className='sign' onClick={() => navigate("/Login")}> Sign in</li>) :
                                <li className='sign' onClick={handleLogout}><PermIdentityIcon />Logout</li>
                        }
                    </div>
                    <div className="right">
                        <li> <SearchIcon onClick={() => setShowSearch(true)} /></li>
                        <span className="cart-icon" onClick={() => navigate("/Cart")}>
                            <ShoppingCartOutlinedIcon />
                            <span>{quantity}</span>
                        </span>
                        {
                            !user ? (<li className='sign' onClick={() => navigate("/Login")}>Sign in</li>) :
                                <li className='sign' onClick={handleLogout}>Logout</li>
                        }

                    </div>
                </div>
            </header>
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )
}

export default Header
