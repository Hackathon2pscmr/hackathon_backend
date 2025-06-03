import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (login(form.username, form.password)) {
      toast.success('Login successful!', {
        position: "top-center",
        autoClose: 2000
      });
      setTimeout(() => navigate('/admin/participants'), 2000);
    } else {
      toast.error('Invalid credentials', {
        position: "top-center",
        autoClose: 2000
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Admin Login</h2>

        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-cyan-600 font-semibold py-2 px-4 rounded-lg transition"
        >
          Login
        </button>
      </form>

      <ToastContainer theme="dark" />
    </div>
  );
};

export default AdminLogin;