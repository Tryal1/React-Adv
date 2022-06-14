import { ChangeEvent, useState } from "react";

//T el tipo de dato q resivo es el tipo de dato en initialState
export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // event.target.name hace referencia al name del input
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({ ...initialState });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formData, //Para desestructurar en donde lo usemos
    formData,
    onChange,
    resetForm,
    isValidEmail,
  };
};
