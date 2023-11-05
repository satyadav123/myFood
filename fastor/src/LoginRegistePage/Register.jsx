import { useState } from "react";
import './styles/Register.css';
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');

    const mobileNumber = (e) => {
        setMobile(e.target.value);
    };

    const SendOtp = async () => {
        if (mobile.length !== 10) {
            alert("Please enter the correct mobile number");
            return; // Don't proceed if the mobile number is invalid
        }

        try {
            const response = await fetch('https://staging.fastor.in/v1/pwa/user/register', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    mobileNumber: mobile
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.OTP) {
                    setOtp(data.OTP);
                    console.log("OTP:", data.OTP);
                    navigate('/login'); // Navigate to the login page here
                } else {
                    navigate('/login');
                    console.log("Failed to fetch OTP.");
                }
            } else {
                console.log("Failed to send mobile number.");
            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="register-box">
                <div className="inner-register">
                    <h2>Enter Your Mobile Number</h2>
                    <h5 className="digit">We will send you the 4-digit verification code</h5>
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        onChange={mobileNumber}
                    />
                    <button onClick={SendOtp}>Send Code</button>
                </div>
            </div>
        </>
    );
};
