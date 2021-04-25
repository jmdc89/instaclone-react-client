import React, { useState } from "react";
import { Container, Image } from "semantic-ui-react";
import instaclone from "../../assets/png/instaclone.png";
import "./Auth.scss";

export default function Auth() {
  return (
    <Container fluid className="auth">
      <Image src={instaclone} />

      <div className="container-form">
        <p>Formularios</p>
      </div>

      <div className="change-form">
        <p>¿No tienes cuenta?</p>
      </div>
    </Container>
  );
}
