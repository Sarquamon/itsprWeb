import * as yup from "yup";

const requiredField = "Este campo es requerido";
const validEmail = "Debes ingresar un correo valido";
const validPassword = "La contraseña debe contener 7 carácteres como mínimo.";

export const yupLoginSchema = yup.object({
  email: yup.string().email(validEmail).required(requiredField),
  password: yup.string().required(requiredField),
});

export const yupRegisterSchema = yup.object({
  email: yup.string().email(validEmail).required(requiredField),
  password: yup.string().min(8, validPassword).required(requiredField),
  confirmPassword: yup
    .string()
    .required(requiredField)
    .oneOf([yup.ref("password")], "Las contraseñas no son iguales"),
});
