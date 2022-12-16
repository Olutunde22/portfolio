import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  fullName: Yup.string(),
  subject: Yup.string(),
  message: Yup.string()
});


