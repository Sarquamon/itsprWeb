import React from "react";
import { Formik, Form } from "formik";
import { Grid } from "@material-ui/core";
import {
  CustomTextField,
  CustomPasswordField,
} from "../components/customMatUiComp";
import "./Login/login.css";
import { Link } from "react-router-dom";
import { yupLoginSchema } from "../schemas/yupSchemas";

export const Login = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <div className="formBackground">
            <h1 className="formTitle">Inicia Sesión</h1>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);

                console.log(data);

                setSubmitting(false);
              }}
              validationSchema={yupLoginSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <CustomTextField
                    label="Email"
                    placeholder="Email"
                    name="email"
                  />
                  <CustomPasswordField
                    label="Contraseña"
                    placeholder="Contraseña"
                    name="password"
                  />
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="customButton"
                  >
                    Iniciar Sesión
                  </button>
                  <Link to="/register">
                    <button className="customButton">Registrarse</button>
                  </Link>
                  <small>
                    ¿Olvidaste tu contraseña? recuperala{" "}
                    <Link to="/forgotpwd">aqui</Link>.
                  </small>
                </Form>
              )}
            </Formik>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
};
