import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";

import axios from "axios";
import * as yup from "yup";

const userSchema = yup
  .object({
    first_name: yup.string().trim().required("First name is required"),
    last_name: yup.string().trim().required("Last name is required"),
    username: yup.string().trim().required("Username is required"),
    email: yup
      .string()
      .trim()
      .email("Invalid Email")
      .required("Email is required"),
    password: yup
      .string()
      .trim()
      .required("Password is required")
      .matches(/[0-9]/, "You must enter at least one number.")
      .matches(/[a-z]/, "You must enter at least one lowercase letter.")
      .matches(/[A-Z]/, "You must enter at least one Uppercase letter.")
      .matches(/[#?!@$%^&*-]/, "You must enter at least one symbols.")
      .min(8, "Password must be at least 8 characters"),
    confirm_password: yup
      .string()
      .label("Confirm password")
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const initialValues = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/signup/",
            {
              first_name: values.first_name,
              last_name: values.last_name,
              username: values.username,
              email: values.email,
              password: values.password,
              confirm_password: values.confirm_password,
            }
          );
          console.log("Signup successful:", response.data);
          alert("Signup successfully");
          action.resetForm();
        } catch (error) {
          console.error(
            "Signup failed:",
            error.response?.data || error.message
          );
          alert("Signup Failed");
        }
      },
    });

  return (
    <div className="flex justify-center bg-gradient-to-r from-orange-300 from-10% via-sky-100 via-30% to-yellow-200 to-90%">
      <div className=" relative md:bg-white bg-orange-600 md:w-[50%] w-[100%] h-screen flex justify-center">
        <form
          className="w-[100%] flex flex-col bg-white m-10 rounded-lg justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="text-4xl font-bold text-primary">Registration</div>{" "}
          <br />
          <div className=" w-[80%] flex flex-col flex-start">
            <div className="flex items-right">First Name</div>
            <input
              className="border-2 rounded-lg  px-2 py-2"
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.first_name && touched.first_name ? (
              <div className="text-red-500 ">{errors.first_name}</div>
            ) : null}
          </div>
          <div className=" w-[80%] flex flex-col flex-start">
            <div className="">Last Name</div>
            <input
              className=" border-2 rounded-lg  px-2 py-2 "
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.last_name && touched.last_name ? (
              <div className="text-red-500 ">{errors.last_name}</div>
            ) : null}
          </div>
          <div className=" w-[80%] flex flex-col flex-start">
            <div className="">User Name</div>
            <input
              className=" border-2 rounded-lg  px-2 py-2 "
              type="text"
              name="username"
              id="username"
              placeholder="Last name"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username ? (
              <div className="text-red-500 ">{errors.username}</div>
            ) : null}
          </div>
          <div className=" w-[80%] flex flex-col flex-start">
            <div className="">Email</div>
            <input
              className="border-2 rounded-lg px-2 py-2"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <div className="text-red-500">{errors.email}</div>
            ) : null}
          </div>
          <div className=" w-[80%] flex flex-col flex-start">
            <div className="">Password</div>
            <input
              className="  border-2 rounded-lg px-2 py-2"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
            <div className="">Confirm Password</div>
            <input
              className="  border-2 rounded-lg px-2 py-2"
              type="text"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm password "
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <div className="text-red-500">{errors.confirm_password}</div>
            ) : null}
          </div>
          <button
            className="font-bold px-2 py-2 bg-gray-400 text-white rounded-lg border-0 w-[80%]  cursor-pointer"
            type="submit"
            id="button"
          >
            Sign up
          </button>
          <div className=" flex pt-6 md:pt-10">
            Already have an account?
            <NavLink
              className="text-sky-500 ml-1 cursor-pointer"
              to={"/signin"}
            >
              Login now
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
