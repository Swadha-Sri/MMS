import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import AdminSignIn from './AdminSignIn'; // Import AdminSignIn directly
import { AdminSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminSignInStyles';
import axios from 'axios';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    // const email = "swadhasri@gmail.com";
    // const password = "swagger123";

    if (email === "swadhasri@gmail.com" && password === "swagger123") {
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  //   try {
  //     const response = await axios.post('http://localhost:4000/api/v1/users/signin', { email, password });
  //     if (response.status === 200) {
  //       // Sign-in successful, redirect to admin dashboard
  //       navigate("/admin/dashboard");
  //       console.log("Success");
  //     } else {
  //       // Handle sign-in errors
  //       console.error('Sign-in failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during sign-in:', error);
  //   }
  // };

  return (
    <AdminSignInContainer>
      <h2>Admin Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton to="../Admin/Dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
        {/* <SubmitButton onClick={handleSignIn}>Sign In</SubmitButton> */}
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
