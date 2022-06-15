import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validation) continue;

  let shema = Yup.string();

  for (const rule of input.validation) {
    if (rule.type === "required") {
      shema = shema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      shema = shema.min((rule as any).value, "Necesitas mas caracteres");
    }
    if (rule.type === "email") {
      shema = shema.email('El email no es un formato correcto')
    }
  }

  requiredFields[input.name] = shema;
}

const validationShema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationShema}
      >
        {(formik) => (
          <Form>
            {formJson.map(
              ({ type, name, placeholder, label, value, options }) => {
                if (
                  type === "input" ||
                  type === "password" ||
                  type === "email"
                ) {
                  return (
                    <MyTextInput
                      key={name}
                      type={type as any}
                      name={name}
                      placeholder={placeholder}
                      label={label}
                    />
                  );
                } else if (type === "select") {
                  return (
                    <MySelect key={name} label={label} name={name}>
                      <option value="" disabled>
                        Select Option
                      </option>
                      {options?.map(({ id, label }) => (
                        <option value={id} key={id}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }
              }
            )}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
