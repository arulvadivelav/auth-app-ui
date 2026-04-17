import React, { useState } from 'react';
import InputField from '../components/InputField';
import { apiRequest } from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import { RESPONSE_200, RESPONSE_400 } from '../constants/constants';
import AlertBox from '../components/Alert';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [data, setData] = useState({ email_id: '', password: '' });
  const [errorMsg, setErrorMsg] = useState({ email_id: '', password: '', general: '' });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg({ email_id: '', password: '', general: '' });
    setLoading(true);

    try {
      const result = await apiRequest('login', 'POST', data);

      if (result.status_code === RESPONSE_200) {
        setAlert({ message: result.message, type: 'success' });

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);

      } else if (result.status_code === RESPONSE_400) {
        setAlert({ message: result.message, type: 'error' });
        setErrorMsg({ general: result.message });
      } else {
        setAlert({ message: result.message, type: 'error' });
      }
    } catch (error) {
      setAlert({ message: "Internal server error", type: 'error' });
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      
      <div className="overlay"></div>

      <div className="login-box">
        {alert.message && (
          <AlertBox
            message={alert.message}
            alertType={alert.type}
            onClose={() => setAlert({ message: '', type: '' })}
          />
        )}

        <h2>Welcome Back</h2>
        <p className="subtitle">Please login to your account</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <InputField
              type="email"
              placeholder="Enter your email"
              value={data.email_id}
              required={true}
              onChange={(e) => setData({ ...data, email_id: e.target.value })}
            />
            {errorMsg.email_id && <p className="fieldError">{errorMsg.email_id}</p>}
          </div>

          <div className="form-group">
            <InputField
              type="password"
              placeholder="Enter your password"
              value={data.password}
              required={true}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            {errorMsg.password && <p className="fieldError">{errorMsg.password}</p>}
          </div>

          {errorMsg.general && <p className="fieldError">{errorMsg.general}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="links">
          <a href="/send-otp?type=forgot">Forgot Password?</a>
          <span>|</span>
          <a href="/send-otp?type=register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;