import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo1.png'; // Import your logo image
import { 
  AdminSignInContainer, 
  FormContainer, 
  InputField, 
  SubmitButton, 
  Heading, 
  Logo1 
} from '../styles/AdminSignInStyles'; // Styled components

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Handle form submit
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/v1/users/admin/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (data.success) {
        // Save admin info in localStorage
        localStorage.setItem("admin", JSON.stringify(data.admin));
        navigate("/admin/dashboard"); // Redirect to dashboard
      } else {
        alert(data.message || "Unauthorized access");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Navigate to forgot password page
  const handleForgotPassword = () => {
    navigate('/teacher-signIn/forgotpassword');
  };

  return (
    <AdminSignInContainer>
      <Logo1 src={logo1} alt="Logo" />
      <Heading>ADMIN SIGN IN</Heading>
      <FormContainer onSubmit={handleSignIn}>
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
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </SubmitButton>

        <button
          type="button"
          onClick={handleForgotPassword}
          style={{
            marginTop: '10px',
            color: 'blue',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Forgot Password?
        </button>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
