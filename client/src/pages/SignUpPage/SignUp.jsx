import React from 'react'
import './SignUp.css'
import Register from '../../assests/signup.svg'
import Profile from '../../assests/profile.svg'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { publicRequest } from '../../utils/requestMethod';

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    console.log(error);

    const registerValidation = async () => {
        try {
            const res = await publicRequest.post('/auth/register', { username, email, password });
            console.log(res);
            if (res.data) {
                registerUser(dispatch, { username, email, password });
                navigate('/login');
                toast.success('Account created successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    theme: "colored",
                })
            }
        } catch (error) {
            console.log(error.response.data);
            // console.log(error.response.data.keyPattern);
            toast.error(error.response.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "colored",
            })
            // }
        }
    }
    const handleClick = (e) => {
        if (!username || !email || !password) {
            username === '' ? toast.warn('Please enter username') : email === '' ? toast.warn('Please enter email') : password === '' ? toast.warn('Please enter password') :
                toast.warn('Please fill all fields')
            return;
        }
        e.preventDefault();
        registerValidation(username, email, password);
    }
    return (
        <>
            <div className="main-signup-container">
                <div className="signup-img">
                    <img src={Register} alt="" />
                </div>
                <div className="signup-container">
                    <form action="">
                        <img className="avatar" src={Profile} alt="" />
                        <h2>Create Account</h2>
                        <div className="input-div one focus ">
                            <div className="i">
                                <PersonIcon />
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input
                                    type="name" className="input" placeholder='ankitpaswan' minLength={5} required
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-div one focus ">
                            <div className="i">
                                <EmailIcon />
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input
                                    type="email" className="input" placeholder='ankitpaswan@gmail.com' required
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="input-div two focus">
                            <div className="i">
                                <LockIcon />
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input
                                    type="password" className="input" placeholder='******'
                                    onChange={(e) => setPassword(e.target.value)} minLength={6} required />
                            </div>
                        </div>
                        <span onClick={() => navigate("/Login")}>Already have an account? SignIn</span>
                        <button type="submit" className="btn" onClick={handleClick} disabled={isFetching}>SignUp</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
