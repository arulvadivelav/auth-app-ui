import React, { useState } from 'react';
import InputField from '../components/InputField';
import { apiRequest } from '../services/AuthServices';
import { useNavigate, useLocation } from 'react-router-dom';
import { RESPONSE_200, RESPONSE_400 } from '../constants/constants'
import AlertBox from '../components/Alert'
import '../styles/LoginPage.css';

const SendOtpPage = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');

  const [data, setData] = useState({ email_id: '', otp: '' })
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOtpSent, setisOtpSent] = useState(false);
  const [isVerify, setisVerify] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [isRequired, setIsRequired] = useState(true);
  const navigate = useNavigate()



  const handleSendOtp = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    try {
      const result = await apiRequest("send-otp", "POST", data);
      if (result.status_code === RESPONSE_200) {
        setisOtpSent(true)
        setisVerify(true)
        setAlert({ message: result.message, type: 'success' });
      }
      else if (result.status_code === RESPONSE_400) {
        setAlert({ message: result.message, type: 'error' });
      }
    } catch (error) {
      setAlert({ message: error, type: 'success' });
    }
    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    try {
      const result = await apiRequest("verify-otp", "POST", data);
      if (result.status) {
        setAlert({ message: result.message, type: 'success' });
        if (type === "register") {
          setTimeout(() => {
            navigate('/register')
          }, 2000)

        } else if (type === "forgot") {
          setTimeout(() => {
            navigate('/forgot-password')
          }, 2000)
        }
      }
      else {
        setAlert({ message: result.message, type: 'error' });
      }
    } catch (error) {
      setErrorMsg(error.message);
      setAlert({ message: error.message, type: 'error' });
    }
    setLoading(false);
  };
  return (
  <div className="login-container">
    <div className="overlay"></div>

    <div className="login-box">
      {alert.message && <AlertBox {...alert} onClose={() => setAlert({})} />}

      <h2>Verify Email</h2>

      <form onSubmit={isVerify ? handleVerifyOtp : handleSendOtp}>
        <div className="form-group">
          <InputField
            type="email"
            value={data.email_id}
            placeholder="Email"
            required={true}
            onChange={(e) => setData({ ...data, email_id: e.target.value })}
          />
        </div>

        {isOtpSent && (
          <div className="form-group">
            <InputField
              type="password"
              value={data.otp}
              required={true}
              onChange={(e) => setData({ ...data, otp: e.target.value })}
            />
          </div>
        )}

        {errorMsg && <p className="fieldError">{errorMsg}</p>}

        <button type="submit" disabled={loading}>
          {isOtpSent ? 'Verify OTP' : 'Send OTP'}
        </button>
      </form>
    </div>
  </div>
);
};

export default SendOtpPage;
