import { Form, Formik, useField } from "formik";
import React from "react";
import { useSnapshot } from "valtio";
import * as Yup from "yup";
import useLandingState, {
  addDrama,
  removeDrama,
} from "~/modules/Landing/LandingStore";

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
        validationSchema={Yup.object({
          name: Yup.string()
            .max(5, "Must be 5 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addDrama(values.name);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
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

const MyTextInput = (props) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

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
