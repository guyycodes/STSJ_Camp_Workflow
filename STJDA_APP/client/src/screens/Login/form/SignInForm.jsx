import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
  Box,
} from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { validate } from "../../../util/validateLogin/validateLogin.js";
import axios from "axios";

export const SignInForm = () => {
  const loginFormRef = useRef(null);
  const storedRememberMe = localStorage.getItem("STJDArememberMe") === "true";
  const storedEmail = storedRememberMe
    ? localStorage.getItem("STJDAemail")
    : "";
  const storedPassword = storedRememberMe
    ? localStorage.getItem("STJDApassword")
    : "";
  const storeJWT = storedRememberMe ? localStorage.getItem("STJDA_JWT") : "";

  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("STJDArememberMe") === "true",
  );
  const [email, setEmail] = useState(storedEmail);
  const [password, setPassword] = useState(storedPassword);
  const [jwt, setJWT] = useState(storeJWT);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const [loginUser, { loading: updateLoading, error: updateError }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem("STJDAemail", email);
      localStorage.setItem("STJDApassword", password);
      localStorage.setItem("STJDArememberMe", "true");
    } else {
      localStorage.removeItem("STJDAemail");
      localStorage.removeItem("STJDApassword");
      localStorage.setItem("STJDArememberMe", "false");
    }
  }, [rememberMe, email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginForm = loginFormRef.current;

    validate(email, password, loginForm);

    console.log(email, password);
  };

  const handleRememberMe = (event) => {
    setRememberMe(event.target.checked);
    console.log(event.target.checked);
  };

  function testEmailInput(event) {
    const result = emailRegex.test(event.target.value);
    !result
      ? setEmailError(true)
      : (setEmailError(false), setEmail(event.target.value));
  }

  const handlePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const oAuthLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Token Response:", tokenResponse);

      if (tokenResponse.code) {
        console.log("Auth Code:", tokenResponse.code);
        try {
          const result = await axios.post(
            "http://localhost:3000/api/auth/google",
            {
              code: tokenResponse.code,
            },
          );

          console.log("Result received:", result);

          const { token } = result.data;
          console.log("Token received:", token);

    //       localStorage.setItem("STJDA_JWT", token);
    //       setJWT(token);
        } catch (error) {
          console.error("Login failed", error);
        }
      } else {
        console.error("No Auth Code Received");
      }

    //   if (tokenResponse.id_token) {
    //     const decodedToken = jwtDecode(tokenResponse.id_token);
    //     console.log("Decoded Token:", decodedToken);
    //     console.log("Email:", decodedToken.email);
    //     console.log("Name:", decodedToken.name);
    //   }
    },
    onError: () => console.log("Login Failed"),
    flow: "auth-code",
    clientId:
      "784750802827-1g450b08l5j16i1beene0hklrgl1gfe8.apps.googleusercontent.com",
    redirectUri: "http://localhost:3000/api/auth/google",
    scope: "openid email profile",
  });

  return (
    <StyledFrame>
      <div className="sign-in-forms-wrapper">
        <div className="sign-in-forms">
          <div className="sign-in-form-web">
            <div className="div">
              <Typography variant="h4" className="element">
                Welcome!
              </Typography>
              <div className="div-2">
                <div className="div-3">
                  <TextField
                    ref={loginFormRef}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={handleEmail} // Corrected to use handleEmailInput
                    error={emailError}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={handlePassword} // Corrected to use handleEmailInput
                    error={passwordError}
                  />
                </div>
                <div className="div-5">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                    className="switcher-item-left"
                  />
                  <Link href="#" className="description-2">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              variant="contained"
              fullWidth
              className="primary-button"
            >
              Sign In
            </Button>
            <div className="nav" />
            <div className="div-6">
              <Button
                variant="contained"
                fullWidth
                className="google-big-button"
                onClick={oAuthLogin}
                startIcon={
                  <img
                    className="other-sign-in-method"
                    alt="Other pay method"
                    src="https://imgur.com/FOF6Hyq.png"
                  />
                }
              >
                Or sign in with Google
              </Button>
            </div>
          </div>
          <div className="sign-up-offer">
            <Typography className="description-3">
              Don't have an account?
            </Typography>
            <Link href="#" className="description-4">
              Sign up now
            </Link>
          </div>
          <a href="https://www.stjda.org">
            <img
              className="screenshot"
              alt="STJDA Logo"
              src="https://imgur.com/1MeimfQ.png"
            />
          </a>
        </div>
      </div>
      <Box className="bottom-panel">
        <Typography className="head"></Typography>
      </Box>
    </StyledFrame>
  );
};

const StyledFrame = styled.div`
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  width: 396px;
  height: fit-content;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  //

  & .sign-in-forms-wrapper {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: auto;
    flex-direction: column;
    gap: 48px;
    position: relative;
    width: 100%;
    margin: 2rem 0 2rem 0;
  }

  & .sign-in-forms {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 65px;
    height: 682px;
    position: relative;
    width: 100%;
  }

  & .sign-in-form-web {
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 32px;
    position: relative;
    width: 100%;
  }

  & .div {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;
  }

  & .element {
    align-self: stretch;
    color: #1a1a1a;
    font-family: var(--title-font-family);
    font-size: var(--title-font-size);
    font-style: var(--title-font-style);
    font-weight: var(--title-font-weight);
    letter-spacing: var(--title-letter-spacing);
    line-height: var(--title-line-height);
    margin-top: -1px;
    position: relative;
  }

  & .div-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 20px;
    position: relative;
    // width: 100%;
  }

  & .div-3 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
    // width: 100%;
  }

  & .div-5 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 16px;
    position: relative;
    width: 100%;
  }

  & .switcher-item-left {
    align-items: center;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 8px;
    position: relative;
  }

  @media (max-width: 768px) {
    & .switcher-item-left {
      gap: 0px;
    }

    & .div-5 {
      gap: 0px;
    }
  }

  & .description {
    color: var(--black-900-1a1a1a);
    flex: 1;
    font-family: "Abel", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.3px;
    line-height: 20px;
    margin-top: -1px;
    position: relative;
  }

  & .description-2 {
    color: var(--system-blue-007aff);
    flex: 1;
    font-family: "Abel", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.3px;
    line-height: 20px;
    margin-top: -1px;
    position: relative;
    text-align: right;
  }

  & .primary-button {
    align-self: stretch;
    flex: 0 0 auto;
    position: relative;
    width: 100%;
  }

  & .nav {
    align-self: stretch;
    background-color: var(--black-100-e5e5e5);
    height: 1px;
    position: relative;
    width: 100%;
  }

  & .div-6 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
    width: 100%;
  }

  & .google-big-button {
    align-items: center;
    background-color: var(--black-800-333333);
    border-radius: 6px;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 10px 16px;
    position: relative;
  }

  @media (max-width: 400px) {
    & .google-big-button {
      transform: translateY(calc(100vh - 103vh));
    }
  }

  & .div-7 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: flex-end;
    position: relative;
  }

  & .sign-up-offer {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
  }

  @media (max-width: 390px) {
    & .sign-up-offer {
      transform: translateY(calc(100vh - 110vh));
    }
  }

  & .description-3 {
    color: var(--black-900-1a1a1a);
    font-family: "Abel", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.3px;
    line-height: 20px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .description-4 {
    color: var(--system-blue-007aff);
    font-family: "Abel", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.3px;
    line-height: 20px;
    margin-top: -1px;
    position: relative;
    text-align: right;
    white-space: nowrap;
    width: fit-content;
  }

  & .screenshot {
    height: 118px;
    // margin-bottom: -6.5px;
    object-fit: cover;
    position: relative;
    width: 118px;
  }

  @media (max-width: 768px) {
    & .screenshot {
      transform: scale(0.7) translateY(calc(100vh - 110vh));
    }
  }

  @media (max-width: 400px) {
    & .screenshot {
      transform: scale(0.7) translateY(calc(100vh - 120vh));
    }
  }

  & .bottom-panel {
    align-items: center;
    align-self: stretch;
    display: flex;
    gap: 332px;
    height: 24px;
    justify-content: space-around;
    position: relative;
    width: 100%;
  }

  @media (max-width: 400px) {
    & .bottom-panel {
      display: none;
    }
  }

  & .head {
    color: #666666;
    font-family: "Roboto", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.4px;
    line-height: 16px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;
