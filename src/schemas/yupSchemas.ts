import * as yup from "yup";

const requiredField = "Este campo es requerido";
const validEmail = "Debes ingresar un correo valido";
const validPassword = "La contraseña debe contener 7 carácteres como mínimo.";
const strongPassword = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

export const yupLoginSchema = yup.object({
  email: yup.string().email(validEmail).required(requiredField),
  password: yup.string().required(requiredField),
});

export const yupRegisterSchema = yup.object({
  curp: yup
    .string()
    .min(8, "El CURP consiste de 8 caracteres")
    .max(8, "El CURP no sobre pasa de 8 caracteres")
    .required(requiredField),
  rfc: yup
    .string()
    .min(12, "El RFC consiste de 12 o 13 caracteres")
    .max(13, "El RFC no sobre pasa de 13 caracteres")
    .optional(),
  email: yup.string().email(validEmail).required(requiredField),
  password: yup
    .string()
    .matches(
      strongPassword,
      "La contraseña debe contener al menos 1 mayuscula, 1 minuscula, 1 caracter especial, 1 numero y 8 caracteres."
    )
    .min(8, validPassword)
    .required(requiredField),
  confirmPassword: yup
    .string()
    .required(requiredField)
    .oneOf([yup.ref("password")], "Las contraseñas no son iguales"),
  names: yup.string().required(requiredField),
  lastname: yup.string().required(requiredField),
  secondLastname: yup.string().required(requiredField),
  career: yup.string().required(requiredField),
  civilState: yup.string().required(requiredField),
  cellphone: yup.string().required(requiredField),
  telephone: yup.string().required(requiredField),
  birthday: yup.string().required(requiredField),
  birthState: yup.string().required(requiredField),
  birthplace: yup.string().required(requiredField),
  homeStreet: yup.string().required(requiredField),
  homeNumber: yup.string().required(requiredField),
  homeNeighborhood: yup.string().required(requiredField),
  homeMunicipality: yup.string().required(requiredField),
  homePostalCode: yup.string().required(requiredField),
  homeCity: yup.string().required(requiredField),
  homeState: yup.string().required(requiredField),
  school: yup.string().required(requiredField),
  schoolMunicipality: yup.string().required(requiredField),
  schoolState: yup.string().required(requiredField),
  gradDate: yup.string().required(requiredField),
  avgCalif: yup.number().required(requiredField),
  area: yup.string().required(requiredField),
  imssNumber: yup.string().optional(),
  clinic: yup.string().optional(),
  bloodType: yup.string().required(requiredField),
  alergies: yup.string().optional(),
  psychoBackground: yup.string().optional(),
  workCompany: yup.string().optional(),
  tutor: yup.string().optional(),
});
