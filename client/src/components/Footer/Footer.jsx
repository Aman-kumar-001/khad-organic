
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Footer = () => {
    const navigate = useNavigate();
    const [isHomePage, setIsHomePage] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return (
        <>
            <motion.footer className="footer"

                initial={{ opacity: 0.7 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
            >
                <div className="footer-content">
                    <div className="col">
                        <div className="title">KHAORGANIC</div>
                        <div className="text">
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don’t look even slightly believable.
                        </div>
                        <div className="social-items">
                            <div className="social-icon1"><FacebookIcon /></div>
                            <div className="social-icon2"><TwitterIcon /></div>
                            <div className="social-icon3"> <InstagramIcon /></div>
                            <div className="social-icon4"> <LinkedInIcon /></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Get In Touch</div>
                        <div className="c-item">
                            <LocationOnIcon />
                            <div className="text">Village Badeha, Jaari, Banda, UP</div>
                        </div>
                        <div className="c-item">
                            <LocalPhoneIcon />
                            <div className="text">+91 7307221953</div>
                        </div>
                        <div className="c-item">
                            <EmailIcon />
                            <div className="text">customercare@khaorganic.com</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">UseFul Links</div>
                        <span className="text">
                            Premium Atta</span>
                        <span className="text">Daliya</span>
                        <span className="text">Premium Besan</span>
                        <span className="text">SignIn</span>
                        <span className="text">Cart</span>
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">About</span>
                        <span className="text">Products</span>
                        <span className="text">Privacy policy</span>
                        <span className="text">Contact us</span>
                    </div>
                </div>
                <div className="bottam-bar">
                    <div className="bottam-bar-content">
                        <div className="text">
                            Copyright &copy; 2024,
                            <span>
                                KHAORGANIC.COM
                            </span>
                            ,All Rights Reserved
                        </div>
                        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt=" " />
                    </div>
                </div>
            </motion.footer>
            {
                isHomePage && (

                    <motion.div className='footer-btn'
                        initial={{ opacity: 0, x: 40 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: false }}
                        onClick={() => navigate("#")}>
                        <div className='home-button'>
                            <span>⇧</span>
                        </div>
                    </motion.div>
                )
            }

        </>

    );
};

export default Footer;