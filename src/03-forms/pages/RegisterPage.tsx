import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password,
    passwordR,
  } = useForm({
    name: "",
    email: "",
    password: "",
    passwordR: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este Campo es necesario</span>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>El email no es valido</span>}
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          className={`${password.trim().length <= 0 && "has-error"}`}
        />
        {password.trim().length <= 0 && <span>Este Campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contrasena debe tener mas de 6 caracteres</span>
        )}
        <input
          name="passwordR"
          type="password"
          placeholder="Repeat Password"
          value={passwordR}
          onChange={onChange}
          className={`${passwordR.trim().length <= 0 && "has-error"}`}
        />
        {passwordR.trim().length <= 0 && <span>Este Campo es necesario</span>}
        {password.trim().length > 0 && password !== passwordR && (
          <span>La contrasena debe tener mas de 6 caracteres</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
