import React from "react";
import { Formik, Form, Field } from "formik";
import validationSchema from "./Validations"
function FormTodo() {
 
  return (
    <Formik
      initialValues={{
        text:""
      }}
      onSubmit={async (values,bag) => {
        console.log(values);
        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default FormTodo;
