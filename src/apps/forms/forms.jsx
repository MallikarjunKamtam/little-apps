/* eslint-disable no-lone-blocks */
import React, { useRef, useState } from "react";
import { ErrorMessage, Formik, FieldArray, Form } from "formik";
import Table from "../components/Table";
import { cloneDeep } from "lodash";
import { useAppDispatch, useAppSelector } from "../../store.js";
import { formActions, formState } from "./forms.slice";
import * as Yup from "yup";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import "./forms.css";

const Forms = () => {
  const [isEditOn, setIsEditOn] = useState(false);
  const [isAddNew, setIsAddNew] = useState(false);
  const [isAllowEditing, setAllowEditing] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const dispatch = useAppDispatch();
  const formRef = useRef(null);
  const { setInitialValues } = formActions;
  const { initialValues } = useAppSelector(formState).forms;

  // const clearForm = () => {
  //   if (formRef?.current) {
  //     formRef.current.resetForm();
  //   }
  // };

  const formValidation = Yup.object().shape({
    firstName: Yup.string().required("First Name is required").trim(),
    lastName: Yup.string().required("Last Name is required").trim(),
    email: Yup.string().required("Email is required").trim().email(),
    city: Yup.string().required("City is required").trim(),
    sport: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required(),
        })
      )
      .required()
      .min(1),
    color: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required(),
        })
      )
      .required()
      .min(1),
  });

  const formContent = (formikInstance, isForEdit = false) => {
    const { values, setValues } = formikInstance;
    const { city, color, email, firstName, lastName, sport } = values;

    return (
      <div className="all-text-boxes-container-grand">
        <div className="all-text-boxes-container">
          <div className="input-box-container">
            <input
              type="text"
              name="firstName"
              className="input-box"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                const { name, value } = e.target;
                setValues({ ...values, [name]: value });
              }}
            />
            <div className="yup-err-msg">
              <ErrorMessage name="firstName" />
            </div>
          </div>
          <div className="input-box-container">
            <input
              type="text"
              name="lastName"
              className="input-box"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                const { name, value } = e.target;
                setValues({ ...values, [name]: value });
              }}
            />
            <div className="yup-err-msg">
              <ErrorMessage name="lastName" />
            </div>
          </div>
          <div className="input-box-container">
            <input
              type="email"
              name="email"
              className="input-box"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                const { name, value } = e.target;
                setValues({ ...values, [name]: value });
              }}
            />
            <div className="yup-err-msg">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="input-box-container">
            <input
              type="text"
              name="city"
              className="input-box"
              placeholder="City"
              value={city}
              onChange={(e) => {
                const { name, value } = e.target;
                setValues({ ...values, [name]: value });
              }}
            />
            <div className="yup-err-msg">
              <ErrorMessage name="city" />
            </div>
          </div>
        </div>

        {
          <FieldArray name="color">
            {({ remove, push }) => {
              return (
                <div className="field-arr-one">
                  {values.color.map((content, index) => (
                    <div key={index} className="overall-fieldarr-container">
                      <div className="input-to-croos-flex">
                        <div className="input-box-container">
                          <input
                            type="text"
                            name="color"
                            className="input-box"
                            placeholder="Fav Colors"
                            value={color[index].name}
                            onChange={(e) => {
                              const { value } = e.target;
                              const newValue = cloneDeep(values);
                              newValue.color[index].name = value;
                              newValue.color[index].id = index;
                              setValues(newValue);
                            }}
                          />

                          <div className="yup-err-msg">
                            <ErrorMessage name={`color.${index}name`} />
                          </div>
                        </div>
                        <div>
                          {index !== 0 && (
                            <div
                              className="cross-btn"
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              <CloseIcon />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      push({ id: "", name: "" });
                    }}
                  >
                    <label className="add-another-field">
                      + add another color
                    </label>
                  </div>
                </div>
              );
            }}
          </FieldArray>
        }

        {
          <FieldArray name="sport">
            {({ remove, push }) => {
              return (
                <div className="field-arr-one">
                  {values.sport.map((content, index) => (
                    <div key={index} className="overall-fieldarr-container">
                      <div className="input-to-croos-flex">
                        <div className="input-box-container">
                          <input
                            type="text"
                            name="sport"
                            className="input-box"
                            placeholder="Fav sports"
                            value={sport[index].name}
                            onChange={(e) => {
                              const { value } = e.target;
                              const newValue = cloneDeep(values);
                              newValue.sport[index].name = value;
                              newValue.sport[index].id = index;
                              setValues(newValue);
                            }}
                          />

                          <div className="yup-err-msg">
                            <ErrorMessage name={`sport.${index}name`} />
                          </div>
                        </div>
                        <div>
                          {index !== 0 && (
                            <div
                              className="cross-btn"
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              <CloseIcon />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      push({ id: "", name: "" });
                    }}
                  >
                    <label className="add-another-field">
                      + add another sport
                    </label>
                  </div>
                </div>
              );
            }}
          </FieldArray>
        }
        {!isForEdit && (
          <div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  };

  const formInit = () => {
    return (
      <>
        <div className="add-new-form-init-bar">
          <div className="">Add New Form</div>
          <div
            className="cross-btn"
            onClick={() => {
              setIsAddNew(false);
            }}
          >
            <CloseIcon />
          </div>
        </div>
        {formAction()}
      </>
    );
  };

  const formEdit = () => {
    return (
      <div>
        <div className="edit-form-top">
          <div>
            {!isAllowEditing ? (
              <div
                onClick={() => {
                  setAllowEditing(true);
                }}
              >
                <button>Edit Details</button>
              </div>
            ) : (
              <div className="discard-save">
                <div>
                  <button
                    onClick={() => {
                      setIsEditOn(false);
                    }}
                  >
                    Discard
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      if (formRef?.current) {
                        formRef.current.submitForm();
                      }
                      setIsEditOn(false);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            <CloseIcon />
          </div>
        </div>
        {formAction(true)}
      </div>
    );
  };

  const formAction = (isForEdit = false) => {
    return (
      <>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validationSchema={formValidation}
          onSubmit={async (values) => {
            localStorage.setItem("tableItems", values);
            setIsAddNew(false);
          }}
        >
          {(formikInstance) => {
            return isEditOn || isAddNew ? (
              <Form> {formContent(formikInstance, isForEdit)}</Form>
            ) : (
              <></>
            );
          }}
        </Formik>
      </>
    );
  };

  const tableContent = () => {
    return <Table key={"table-of-form"} />;
  };

  return (
    <div>
      <div className="add-new-btn-ground-container">
        <button
          className="add-new-btn-ground"
          onClick={() => {
            setIsAddNew(true);
            dispatch(
              setInitialValues({
                firstName: "",
                lastName: "",
                email: "",
                city: "",
                sport: [{ id: "", name: "" }],
                color: [{ id: "", name: "" }],
              })
            );
          }}
        >
          Add New
        </button>
      </div>

      <Modal open={isAddNew}>
        <Box sx={style}>{formInit()}</Box>
      </Modal>

      <Modal open={isEditOn}>
        <Box sx={style}> {formEdit()}</Box>
      </Modal>

      {tableContent()}
    </div>
  );
};

export default Forms;
