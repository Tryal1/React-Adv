import { Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "", passwordR: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe tener al menos 3 caracteres")
            .max(15, "Maximo 15 caracteres")
            .required("Requerido"),
          email: Yup.string().email("Formato incorrecto").required("Requerido"),
          password: Yup.string()
            .min(6, "Minimo 6 caracteres")
            .required("Requerido"),
          passwordR: Yup.string()
            .oneOf([Yup.ref("password")], "Las contrasena no son iguales")
            .required("Requerido"),
        })}
      >
        {({handleReset}) => {
          return (
            <Form>
              <MyTextInput label="Nombre" name="name" placeholder="Thomas" />

              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="correo@correo.com"
              />

              <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="****"
              />

              <MyTextInput
                label="Password"
                name="passwordR"
                type="password"
                placeholder="****"
              />

              <button type="submit">Create</button>
              <button type="button" onClick={handleReset}>Reset Form</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
