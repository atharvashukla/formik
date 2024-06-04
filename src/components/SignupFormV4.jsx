"use client";

import React from "react";
import { useFormik } from "formik";
import { useEffect } from "react";

// A custom validation functionn. This must return an object
// whose keys are symmetrical to our values/initialValues

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignupFormV4 = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  const handleChange = (event) => {
    formik.handleChange(event);
  };

  const handleBlue = (event) => {
    formik.handleBlur(event);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlue}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="bg-red-500">{formik.errors.firstName}</div>
      ) : null}
      <br />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlue}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="bg-red-500">{formik.errors.lastName}</div>
      ) : null}
      <br />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlue}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="bg-red-500">{formik.errors.email}</div>
      ) : null}
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupFormV4;
