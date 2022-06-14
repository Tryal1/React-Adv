import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // validacion de errors
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Requerido"),
      email: Yup.string()
        .email("No es un formato valido")
        .required("Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          // getFieldProps coloca el name onChange onBlur y value
          {...getFieldProps("firstName")}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          // getFieldProps coloca el name onChange onBlur y value
          {...getFieldProps("lastName")}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="firstName">Email Address</label>
        <input
          type="email"
          // getFieldProps coloca el name onChange onBlur y value
          {...getFieldProps("email")}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
