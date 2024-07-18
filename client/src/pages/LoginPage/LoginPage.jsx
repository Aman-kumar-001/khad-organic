import React from 'react'
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import SignIn from '../../assests/login.svg'
import Profile from '../../assests/profile.svg'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { publicRequest } from '../../utils/requestMethod';

const LoginPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    console.log(error);
    const loginValidation = async () => {

        try {
            const res = await publicRequest.post('/auth/login', { username, password });
            console.log(res);
            if (res.data) {
                login(dispatch, { username, password });
                navigate('/');
                toast.success(`Welcome ${username}!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    theme: "colored",
                })
            }
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "colored",
            })
        }
    };

    const handleSubmit = (e) => {

        if (!username || !password) {
            username === '' ? toast.warn('Please enter username', {
                theme: "colored",
                hideProgressBar: true,
            }) : password === '' ? toast.warn('Please enter password', {
                theme: "colored",
                hideProgressBar: true,
            }) :
                toast.warn('Please fill all fields', {
                    theme: "colored",
                    hideProgressBar: true,
                })
            return;
        }
        e.preventDefault();
        loginValidation(username, password);
    }

    return (
        <>
            <div className="main-login-container">
                <div className="img">
                    <img src={SignIn} alt="" />
                </div>
                <div className="login-container">
                    <form action="" onSubmit={handleSubmit}>
                        <img className="avatar" src={Profile} alt="" />
                        <h2>Welcome</h2>
                        <div className="input-div one focus ">
                            <div className="i">
                                <PersonIcon />
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input
                                    type="name" className="input" placeholder='ankitpaswan' required
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="input-div two focus">
                            <div className="i">
                                <LockIcon />
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input
                                    type="password" className="input" placeholder='*****' onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        <span onClick={() => navigate("/SignUp")}> Register Now?</span>
                        <button type="submit" className="btn" onClick={handleSubmit} disabled={isFetching}>LogIn</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage
