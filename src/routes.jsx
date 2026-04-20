import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'
import SendOtpPage from './pages/SendOTP';
import DashboardPage from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPassword'
import ProfileCardView from './pages/ProfilePage'
import AboutUs from './pages/AboutUs'
import ContactPage from './pages/ContactPage'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/send-otp" element={<SendOtpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/register" element={< RegisterPage />} />
          <Route path="/register" element={< RegisterPage />} />
          <Route path="/profiles" element={< ProfileCardView />} />
          <Route path="/about-us" element={< AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/forgot-password" element={< ForgotPasswordPage />} />
          {/* You can add other routes like Home, Register, etc */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
