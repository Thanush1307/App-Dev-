import React, { useState } from 'react';
import video from '../assests1/video.mp4';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from '../api/axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    number: ''
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setErrorMessage('');
  };

  const validate = () => {
    const newErrors = {};
  
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('/login', formData);
        if (response.data === 'Login successful') {
          setIsLoggedIn(true);
        }
      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data);
        }
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='login-container'>
      <video className='login-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className='login-content'>
        <Paper elevation={10} square className="login-paper" style={{ backgroundColor: "silver", maxWidth: '300px', padding: '20px', margin: 'auto', marginTop: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <center>
            <div className='id1'></div>
            <br />
          </center>

          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              style={{ marginBottom: '20px' }}
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              style={{ marginBottom: '20px' }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              style={{ marginBottom: '20px' }}
            >
              Login
            </Button>
          </form>
          
          {errorMessage && (
            <Typography color="error" align="center">
              {errorMessage}
            </Typography>
          )}

          {isLoggedIn && (
            <Link to="/" id="login-link" style={{ textAlign: 'center', display: 'block', marginTop: '10px' }}>
              Proceed to Home
            </Link>
          )}

          <Link to="/signup" style={{ display: 'block', textAlign: 'center', marginTop: '10px' }}>
            Need to signup?
          </Link>
        </Paper>
      </div>
    </div>
  );
};

export default Login;