//register
import React from 'react';
import { ToastContainer } from 'react-toastify';
import RegistrationForm from '../components/RegistrationForm';

function Register() {
  const handleRegister = (data) => {
    console.log('Registration data:', data);
  };

  return (
    <>
      <ToastContainer />
      <RegistrationForm onRegister={handleRegister} />
    </>
  );
}

export default Register;