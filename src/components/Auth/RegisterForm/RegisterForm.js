import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./RegisterForm.scss";

export default function RegisterForm(props) {
  const { setShowLogin } = props;

  return (
    <>
      <h2 className="register-form-title">
        Regístrate para ver fotos y vídeos de tus amigos.
      </h2>
      <Form></Form>
    </>
  );
}
