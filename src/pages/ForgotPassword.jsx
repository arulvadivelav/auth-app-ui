import React, { useState } from 'react';
import InputField from '../components/InputField';
import { apiRequest } from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import { RESPONSE_200, RESPONSE_400 } from '../constants/constants'
import AlertBox from '../components/Alert'
import '../styles/LoginPage.css';

const ForgotPasswordPage = () => {
  const [data, setData] = useState({ email_id: '', otp: '', new_password: '', confirm_password: '' })
  const [errorMsg, setErrorMsg] = useState({ email_id: '', otp: '', new_password: '', confirm_password: '' });
  const navigate = useNavigate()
  const [isRequired, setIsRequired] = useState(true);
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setErrorMsg({});
    try {

      const result = await apiRequest('forgot-password', 'POST', data);

      if (result.status_code === RESPONSE_200) {
        setAlert({ message: result.message, type: 'success' });
        setTimeout(() => {
          navigate('/')
        }, 2000)

      } else if (result.status_code === RESPONSE_400) {
        setAlert({ message: result.message, type: 'error' });
        setErrorMsg(result.message)
      } else {
        setAlert({ message: result.message, type: 'error' });
      }
    } catch (error) {
      setAlert({ message: "Internal server error", type: 'error' });
    }
  };
  return (
  <div className="login-container">
    <div className="overlay"></div>

    <div className="login-box">
      {alert.message && <AlertBox {...alert} onClose={() => setAlert({})} />}

      <h2>Reset Password</h2>

      <form onSubmit={handleForgotPassword}>
        <div className="form-group">
          <InputField
            type="email"
            value={data.email_id}
            required={true}
            onChange={(e) => setData({ ...data, email_id: e.target.value })}
          />
          {errorMsg.email_id && <p className="fieldError">{errorMsg.email_id}</p>}
        </div>

        <div className="form-group">
          <label>OTP *</label>
          <InputField
            type="password"
            value={data.otp}
            required={true}
            onChange={(e) => setData({ ...data, otp: e.target.value })}
          />
          {errorMsg.otp && <p className="fieldError">{errorMsg.otp}</p>}
        </div>

        <div className="form-group">
          <InputField
            type="password"
            value={data.new_password}
            required={true}
            onChange={(e) => setData({ ...data, new_password: e.target.value })}
          />
        </div>

        <div className="form-group">
          <InputField
            type="password"
            required={true}
            value={data.confirm_password}
            onChange={(e) => setData({ ...data, confirm_password: e.target.value })}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);
};

export default ForgotPasswordPage;
