import React from "react";
import { Grid } from "@material-ui/core";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import { yupRegisterSchema } from "../schemas/yupSchemas";
import {
  CustomCheck,
  CustomTextField,
  CustomPasswordField,
  CustomSelectField,
} from "../components/customMatUiComp";
import { FormikSelectItems } from "../types/itsprComponent";
import { dayItems, monthItems } from "../utils/selectFieldUtils";

const careerItems: FormikSelectItems[] = [
  {
    label: "Ing. Sistemas Computacionales",
    value: "Ing. Sistemas Computacionales",
  },
];

export const Register = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid item xs={8}>
          <div className="formBackground">
            <h1 className="formTitle">Registrate</h1>

            <Formik
              initialValues={{
                curp: "",
                rfc: "",
                showRfcFields: false,
                email: "",
                password: "",
                confirmPassword: "",
                names: "",
                lastname: "",
                secondLastname: "",
                career: "",
                civilState: "",
                cellphone: "",
                telephone: "",
                birthDay: "",
                birthMonth: "",
                birthYear: "",
                birthState: "",
                birthplace: "",
                homeStreet: "",
                homeNumber: "",
                homeNeighborhod: "",
                homeMunicipality: "",
                homePostalCode: "",
                homeCity: "",
                homeState: "",
                school: "",
                schoolMunicipality: "",
                schoolState: "",
                gradDate: "",
                avgCalif: "",
                area: "",
                imssNumber: "",
                clinic: "",
                bloodType: "",
                alergies: "",
                psychoBackground: "",
                workCompany: "",
                tutor: "",
              }}
              onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);

                console.log(data);

                setSubmitting(false);
              }}
              validationSchema={yupRegisterSchema}
            >
              {({ values, isSubmitting }) => (
                <Form>
                  <Grid container spacing={1}>
                    <Grid item xs>
                      <CustomTextField
                        label="CURP"
                        placeholder="CURP"
                        name="curp"
                      />
                    </Grid>
                    <Grid item xs>
                      <CustomTextField
                        label="Email"
                        placeholder="Email"
                        name="email"
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item xs>
                      <CustomPasswordField
                        label="Contraseña"
                        placeholder="Contraseña"
                        name="password"
                      />
                    </Grid>
                    <Grid item xs>
                      <CustomPasswordField
                        label="Confirma tu contraseña"
                        placeholder="Confirma tu contraseña"
                        name="confirmPassword"
                      />
                    </Grid>
                  </Grid>

                  <CustomTextField
                    label="Nombre(s)"
                    placeholder="Nombre(s)"
                    name="names"
                  />
                  <Grid container spacing={1}>
                    <Grid item xs>
                      <CustomTextField
                        label="Apellido Paterno"
                        placeholder="Apellido Paterno"
                        name="lastname"
                      />
                    </Grid>
                    <Grid item xs>
                      <CustomTextField
                        label="Apellido Materno"
                        placeholder="Apellido Materno"
                        name="secondLastname"
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item xs={4} container spacing={1}>
                      <Grid item xs>
                        <CustomSelectField
                          name="birthDay"
                          label="Dia"
                          items={dayItems()}
                          labelId="daySelectLabel"
                          selectId="daySelect"
                        />
                      </Grid>
                      <Grid item xs>
                        <CustomSelectField
                          name="birthMonth"
                          label="Mes"
                          items={monthItems()}
                          labelId="monthSelectLabel"
                          selectId="monthSelect"
                        />
                      </Grid>
                      <Grid item xs>
                        <CustomTextField
                          label="Año"
                          placeholder="Año"
                          name="birthYear"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <CustomSelectField
                        name="career"
                        label="Carrera Deseada"
                        items={careerItems}
                        labelId="careerSelectLabel"
                        selectId="careerSelect"
                      />
                    </Grid>
                  </Grid>

                  <CustomCheck
                    name="showRfcFields"
                    label="¿Tienes RFC?"
                    labelPlacement="start"
                  />
                  {values.showRfcFields ? (
                    <CustomTextField label="RFC" placeholder="RFC" name="rfc" />
                  ) : (
                    <></>
                  )}
                  <pre>{JSON.stringify({ values }, null, 2)}</pre>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="customButton"
                  >
                    Registrarse
                  </button>
                  <Link to="/register">
                    <button className="customButton">Registrarse</button>
                  </Link>
                  <small>
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login">Inicia Sesión</Link>.
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
