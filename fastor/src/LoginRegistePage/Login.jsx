import React, { useState } from "react";
import './styles/Login.css'; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate=useNavigate()
    const [otp, setOTP] = useState(["", "", "", "", "", ""]);

    const handleOTPChange = (e, index) => {
        const updatedOTP = [...otp];
        updatedOTP[index] = e.target.value;
        setOTP(updatedOTP);
    };

    const SendOtp = async () => {
        const otpValue = otp.join(""); // Combine all the OTP digits

        // Now you can use otpValue to send the OTP to the server for verification.
        console.log("OTP to Verify:", otpValue);
        if(otpValue=='123456'){
       navigate('/mainpage')
        }
        else{
            alert("Otp Incorrrect")
        }
    };

    return (
        <>


            <div className="register-box">
                <div className="inner-register">
                    <h2>OTP Verification</h2>
                    <h5 className="digit">Enter the verification code we just sent on your Mobile Number.</h5><br/>
                    <div className="otp-inputs">
                        {otp.map((digit, index) => (
                            <input
                                type="text"
                                maxLength="1"
                                key={index}
                                value={digit}
                                onChange={(e) => handleOTPChange(e, index)}
                            />
                        ))}
                    </div>
                    <button onClick={SendOtp}>Send Code</button>
                </div>
            </div>
        </>

    );
};
