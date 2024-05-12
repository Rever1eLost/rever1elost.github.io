import React, { useState } from 'react';
import './Login.css'; // Импортируйте стили для формы входа
import ResponsiveStyles from './ResponsiveStyles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для проверки пользовательских данных и выполнения входа
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (e.target.value !== '') {
      setPassword(e.target.value);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url('banner.webp')` }}>
      <ResponsiveStyles /> {/* Включаем адаптацию стилей */}
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? 'Hide' : 'Show'} password
          </button>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;