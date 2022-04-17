import React, { useState } from "react";
import classNames from "classnames";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import mainStyles from "../../styles/main.module.css";
import styles from "./Login.module.css";
import { Form, Button } from "react-bootstrap";
import { AUTH_TOKEN } from "../../config/constants";

const CREATE_LOGIN_MUTATION = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [error, setError] = useState(false);
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [createLogin] = useMutation(CREATE_LOGIN_MUTATION, {
    variables: {
      email: loginState.email,
      password: loginState.password,
    },
  });

  const handleSubmit = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    try {
      const res = await createLogin();
      localStorage.setItem(AUTH_TOKEN, res.data.login.token);
      navigate("/");
    } catch {
      setError(true);
    } finally {
      setLoginState({
        email: "",
        password: "",
      });
    }
  };
  return (
    <>
      <div className={styles.Container}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Control
              required
              type="text"
              name="email"
              placeholder="Enter email"
              className={styles.Input}
              value={loginState.email}
              onChange={(e) =>
                setLoginState({
                  ...loginState,
                  email: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Enter password"
              className={styles.Input}
              value={loginState.password}
              onChange={(e) =>
                setLoginState({
                  ...loginState,
                  password: e.target.value,
                })
              }
            />
          </Form.Group>
          <Button
            className={classNames(mainStyles.Button, styles.SubmitButton)}
            type="submit"
          >
            Login
          </Button>
        </Form>
        <div
          className={classNames(styles.ErrorContainer, {
            [styles.Error]: !error,
          })}
        >
          No such user. Try again or go away.
        </div>
      </div>
    </>
  );
};

export default Login;
