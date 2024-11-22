import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

const App = () => (
  <div>
    <h1>React Form Handling</h1>
    <h2>Controlled Form</h2>
    <RegistrationForm />
    <h2>Formik Form</h2>
    <FormikForm />
  </div>
);

export default App;
