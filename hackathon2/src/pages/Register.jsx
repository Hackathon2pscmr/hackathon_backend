import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const Register = () => {
  const handleRegister = (data) => {
    console.log("User registered:", data);
  };

  return <RegistrationForm onRegister={handleRegister} />;
};

export default Register;
