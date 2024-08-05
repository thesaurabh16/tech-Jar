import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await login(email, password);
      toast.success(response.message);
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen"
    style={{ 
      backgroundImage: 'url(https://img.freepik.com/free-photo/beautiful-office-space-cartoon-style_23-2151043271.jpg?t=st=1722700130~exp=1722703730~hmac=ce848c41528432e803b36a6bfe2c65830f6cf6f03a524022516aad249763a24b&w=996)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    >
      
        
        <div className="w-full max-w-lg p-8 rounded-lg shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
        <h2 className="text-sm mb-2 text-center text-[#122128]   font-semibold xl:text-2xl">Login</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <div className="mb-6">
            <label className="block text-[#122128]  text-lg mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#122128] text-lg mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#122128] text-white py-4 rounded-lg hover:bg-[#122128] transition duration-200 text-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
