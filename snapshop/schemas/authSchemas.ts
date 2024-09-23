import * as Yup from "yup";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneNumberRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegex, "Must be a valid email"),
  username: Yup.string()
    .min(6, "Username must be atleast 6 characters")
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      passwordRegex,
      "Password must contain atleast 8 characters, at least one letter and one number"
    ),
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(phoneNumberRegex, "Must be a valid phone number"),
});
