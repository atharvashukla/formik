import { useFormik } from "formik";
import React from "react";

// - handleSubmit is the submission handler
// - handleChange is a change handler to pass to each
//   <input>, <select>, or <textarea>
// - values is our form's current values

// THE BENEFIT: no need to write custom event handlers
// for each an every input - just use useFormik()

const SignupFormV1 = () => {
  // Pass the useFormik() hook initial form values
  // and a submit function that will be called when
  // the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    </form>
  );
};

export default SignupForm;
