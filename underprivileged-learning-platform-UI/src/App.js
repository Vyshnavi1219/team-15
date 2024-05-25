
import React, { useState } from 'react';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import CourseForm from './component/CourseForm';

const OnlineLearningPlatform = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  return (
    <div>
      <h1>Online Learning Platform for Underprivileged Students</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>

      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
    </div>
  );
};

export default OnlineLearningPlatform;