// const { useState } = require("react");

// function useForm(initialState = {}, validations = [], onSubmit = () => {}) {
//   // Add the 'onSubmit' argument
//   const { isValid: initialIsValid, errors: initialErrors } = validate(
//     validations,
//     initialState
//   );
//   const [values, setValues] = useState(initialState);
//   const [errors, setErrors] = useState(initialErrors);
//   const [isValid, setValid] = useState(initialIsValid);
//   const [touched, setTouched] = useState({});
//   const changeHandler = (event) => {
//     const newValues = { ...values, [event.target.name]: event.target.value };
//     const { isValid, errors } = validate(validations, newValues);
//     setValues(newValues);
//     setValid(isValid);
//     setErrors(errors);
//     setTouched({ ...touched, [event.target.name]: true });
//   };
//   // Add this
//   const submitHandler = (event) => {
//     event.preventDefault();
//     onSubmit(values);
//   };
//   return { values, changeHandler, isValid, errors, touched, submitHandler }; // Add 'submitHandler'
// }

import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit1 = (event) => {
      console.log("first")
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange1= (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange1,
    handleSubmit1,
    values,
    errors,
  }
};

export default useForm;
