import React from "react";
import useLandingState, {
  addDrama,
  removeDrama,
} from "~/modules/Landing/LandingStore";
import { useSnapshot } from "valtio";
import {
  ErrorMessage,
  Field,
  FieldHookConfig,
  Form,
  Formik,
  useField,
  useFormik,
} from "formik";
import * as Yup from "yup";

export interface KDramasProps {}

export default function KDramas({}: KDramasProps) {
  const snap = useSnapshot(useLandingState);

  return (
    <div>
      {snap.kdramas.map((item) => (
        <div>{item.name}</div>
      ))}

      <Formik
        initialValues={{ name: "" }}
        // validate={(values) => {
        //   const errors: any = {};
        //   if (!values.name) {
        //     errors.name = "Required";
        //   }
        //   return errors;
        // }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(5, "Must be 5 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //  alert(JSON.stringify(values, null, 2));
            addDrama(values.name);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          {/* <Field id="name" name="name" placeholder="Name" />
          <ErrorMessage name="name" /> */}
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <button onClick={addDrama}>Add new</button>
      <button onClick={removeDrama}>Remove first</button>
    </div>
  );
}

interface OtherProps {
  label: string;
}

const MyTextInput = (props: OtherProps & FieldHookConfig<string>) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input className="text-input" {...field} type={props.type} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
