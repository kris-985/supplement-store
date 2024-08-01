import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signUp } from "../services/auth.services";
import {
  createUserUsername,
  getUserByUsername,
} from "../services/users.services";
import Swal from "sweetalert2";
import {
  defaultError,
  invalidEmailError,
  passwordError,
  registeredError,
  usedEmailError,
  usernameError,
} from "../utils/errors";
import styled from "styled-components";
import { inputs } from "../utils/helpers";
import FormInputSignUp from "../form/FormInputSignUp";

export const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
    firstname: "",
    lastname: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();

    if (values.password.length < 6) {
      return Swal.fire(passwordError);
    }

    try {
      const snapshot = await getUserByUsername(values.username);
      if (snapshot.exists()) {
        return Swal.fire(usernameError(values.username));
      }

      const u = await signUp(values.email, values.password);
      if (!u || !u.user) {
        throw new Error("Invalid user object returned from signUp");
      }

      await createUserUsername(
        values.username,
        u.user.uid,
        u.user.email,
        values.firstname,
        values.lastname
      );
      Swal.fire(registeredError);
      navigate("/");
    } catch (e) {
      console.error("Error during registration:", e);
      if (e.message.includes("email-already-in-use")) {
        Swal.fire(usedEmailError(values.email));
      } else if (e.message.includes("invalid-email")) {
        Swal.fire(invalidEmailError(values.email));
      } else {
        Swal.fire(defaultError(e.message));
      }
    }
  };

  return (
    <Wrapper className="d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <StyledCard className="card p-4">
              <h1 className="text-center mb-4 text-danger">SIGN UP</h1>
              <form className="px-md-2" onSubmit={register}>
                {inputs.map((e) => (
                  <FormInputSignUp
                    key={e.htmlFor}
                    htmlFor={e.htmlFor}
                    label={e.label}
                    onChange={onChange}
                    type={e.type}
                  />
                ))}
                <div className="mt-3">
                  <button type="submit" className="btn btn-danger me-2">
                    Sign up
                  </button>
                  <button type="button" className="btn btn-danger">
                    <NavLink
                      to="/login"
                      className="text-white text-decoration-none"
                    >
                      Log in from here
                    </NavLink>
                  </button>
                </div>
              </form>
            </StyledCard>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url("https://www.pacagemockup.com/wp-content/uploads/2021/02/Free-Protein-Powder-Bottle-Container-Mockup-PSD.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const StyledCard = styled.div`
  background-color: rgba(249, 249, 249, 0.9);
`;
