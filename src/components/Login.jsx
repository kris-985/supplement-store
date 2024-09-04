import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import FormInputLogin from "../form/FormInputLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <DivImage className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <OverImage className="card p-4">
              <h1 className="text-center mb-4 text-danger">LOGIN</h1>
              <form onSubmit={handleLogin}>
                {error && <div className="alert alert-danger">{error}</div>}
                <FormInputLogin
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="pesho@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FormInputLogin
                  id="psw"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-danger w-100">
                  Login
                </button>
                <p className="mt-3">
                  Create an account?
                  <NavLink to="/signup" className="ms-2">
                    SignUp <BsArrowRight />
                  </NavLink>
                </p>
              </form>
            </OverImage>
          </div>
        </div>
      </div>
    </DivImage>
  );
};

const DivImage = styled.div`
  background-image: url("https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709224725/catalog/1646654765495312384/pqt7hf4urw5q5dlxlp6g.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const OverImage = styled.div`
  background-color: rgba(249, 249, 249, 0.9);
`;
