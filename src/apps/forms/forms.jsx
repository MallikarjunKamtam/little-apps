import React from "react";
import { ErrorMessage, Formik, useFormik, FieldArray } from "formik";
import Table from "../components/Table";
import { useAppDispatch, useAppSelector } from "../../store.js";

const Forms = () => {
  const initForm = () => {
    return (
      <>
        <div>
          <input type="text" />
        </div>
      </>
    );
  };

  return <div>f</div>;
};

export default Forms;
