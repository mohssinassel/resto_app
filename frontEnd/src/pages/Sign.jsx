import React, { useState } from 'react';
import SignIn from "../components/SignIn";
import SignUp from '../components/SignUp';
import '../styles/Sign.css'
const Sign = () => {
    const [showSignIn, setShowSignIn] = useState(true);

    const toggleComponent = () => {
        setShowSignIn(!showSignIn);
    };

    return (
        <div className="mainContainer">
            <div className='signContainer'>
                {showSignIn ? (
                    <SignIn toggleComponent={toggleComponent} />
                ) : (
                    <SignUp toggleComponent={toggleComponent} />
                )}
                
            </div>
            
        </div>
    )}

export default Sign;