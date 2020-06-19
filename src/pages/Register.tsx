import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import { CustomTextField, CustomRadio } from "../components/customMatUiComp";

export const Register = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={{
          curp: "",
          allergies: "",
          psychoback: "",
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          console.log(data);

          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <CustomTextField
              placeholder="CURP"
              label="CURP"
              name="curp"
              type="input"
            />
            <div>
              <CustomRadio
                label="Si"
                name="allergies"
                value="true"
                type="radio"
              />
              <CustomRadio
                label="No"
                name="allergies"
                value="false"
                type="radio"
              />
              <CustomRadio
                label="Si"
                name="psychoback"
                value="true"
                type="radio"
              />
              <CustomRadio
                label="No"
                name="psychoback"
                value="false"
                type="radio"
              />
            </div>
            <div>
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};
