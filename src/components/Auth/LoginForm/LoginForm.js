import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./LoginForm.scss";

export default function LoginForm() {
  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>Entra para ver fotos y vídeos de tus amigos.</h2>
      <Form.Input
        type="text"
        placeholder="Correo electronico"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email && true}
      />
      <Form.Input
        type="password"
        placeholder="Contraseña"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password && true}
      />
      <Button type="submit" className="btn-submit">
        Iniciar sesión
      </Button>
      {error && <p className="submit-error">{error}</p>}
    </Form>
  );
}
