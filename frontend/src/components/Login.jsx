import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/register', { email, password });
            if (response.data === 'Already registered') {
                alert('E-mail already registered for reward! .');
                navigate('/login');
            } else {
                alert('Registration successfully! Please wait for reward update.');
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container flex">
            <div className="facebook-page flex">
                <div className="text">
                   <h1>
                    facebook
                    </h1>
                    <p>Connect with friends and the world</p>
                    <p>around you on Facebook.</p>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="link">
                        <button type="submit" className="login">
                            Login
                        </button>
                        <Link to="/forgot-password" className="forgot">
                            Forgot Password?
                        </Link>
                    </div>
                    <hr />
                    <div className="button">
                        {/* <Link to="/login">Login</Link> */}
                        <Link to="/create-account" className="create-account">
                            Create New Account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
