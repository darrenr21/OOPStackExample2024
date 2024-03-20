import React, { useState } from 'react';
import axios from 'axios';

function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post('http://localhost:3000/Register', {
                username,
                password,
            });

            if (response.data.success) {
                // Assuming you have a method to handle successful Register
                // For example, saving the Register state and redirecting to another page
                console.log('Register successful', response.data);
                // Redirect or update state here
                // props.history.push('/'); // Redirect to home page or dashboard
            } else {
                // Handle unsuccessful Register
                setErrorMessage('Failed to Register. Please check your username and password.');
            }
        } catch (error) {
            console.error('Register error:', error);
            setErrorMessage('An error occurred during Register.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    );
}