// write your custom hook here to control your checkout form

import { useState } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const useForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [stateValues, set_stateValues] = useState(initialValue);

  const handleChanges = (e) => {
    set_stateValues({ ...stateValues, [e.target.name]: e.target.value });
  };

  const setValues = (input) => {
    set_stateValues(input);
  };

  return [
    stateValues,
    showSuccessMessage,
    setShowSuccessMessage,
    handleChanges,
  ];
};

export default useForm;
