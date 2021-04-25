import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import "./RegisterForm.scss";

export default function RegisterForm(props) {
  const { setShowLogin } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: null,
    onSubmit: (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <>
      <h2 className="register-form-title">
        Regístrate para ver fotos y vídeos de tus amigos.
      </h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Nombre y apellidos"
          name="name"
          //   value={formik.values.name}
          onChange={formik.handleChange}
          //   error={formik.errors.name && true}
        />
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          //   value={formik.values.username}
          onChange={formik.handleChange}
          //   error={formik.errors.username && true}
        />
        <Form.Input
          type="text"
          placeholder="Correo electronico"
          name="email"
          //   value={formik.values.email}
          onChange={formik.handleChange}
          //   error={formik.errors.email && true}
        />
        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          //   value={formik.values.password}
          onChange={formik.handleChange}
          //   error={formik.errors.password && true}
        />
        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
          //   value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          //   error={formik.errors.repeatPassword && true}
        />
        <Button type="submit" className="btn-submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}
