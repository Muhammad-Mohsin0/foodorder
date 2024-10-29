import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

const userSignInSchema = yup
  .object({
    username: yup.string().trim().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const LoggedIn = localStorage.getItem("signin");
    if (LoggedIn === "true") {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (values, action) => {
    console.log("values", values);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signin/", {
        username: values.username,
        password: values.password,
      });
      console.log("Response Data :", response.data);

      const { token } = response.data;
      if (token) {
        localStorage.setItem("signin", true);
        localStorage.setItem("authToken", token);
        navigate("/");
      } else {
        console.log("Token not received");
      }
    } catch (error) {
      console.error("Error:", error);
      if (axios.isAxiosError(error) && error.response) {
        alert("Invalid username or password");
      } else {
        alert("An error occurred. Please try again.");
      }
    }

    action.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSignInSchema,
      onSubmit,
    });

  return (
    <div className="flex justify-center">
      <div className=" relative md:bg-white bg-primary md:w-[50%] w-[100%] h-screen flex justify-center ">
        <form
          className="w-[100%] flex flex-col justify-center bg-white space-y-4 rounded-lg m-10 items-center"
          onSubmit={handleSubmit}
        >
          <div className="text-4xl font-bold text-primary">Majeka Point</div>{" "}
          <br />
          <div className=" w-[80%] flex flex-col flex-start">
            <div className="">User Name</div>
            <input
              className="border-2 rounded-lg px-2 py-2"
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username ? (
              <div className="text-red-500">{errors.username}</div>
            ) : null}
          </div>
          <div className=" w-[80%] flex flex-col flex-start">
            <div className="flex justify-between">
              Password
              <span className="text-sky-500 cursor-pointer">
                Forgot Password ?
              </span>
            </div>

            <input
              className="  border-2 rounded-lg px-2 py-2"
              type="password"
              name="password"
              id="password"
              placeholder="Enter you password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>
          <button
            className="font-bold px-2 py-2 bg-gray-400 text-white rounded-lg border-0 w-[80%] cursor-pointer"
            type="submit"
          >
            Sign in
          </button>
          <div>
            Don't have an account?
            <NavLink
              className="text-sky-500 ml-1 cursor-pointer"
              to={"/signup"}
            >
              Create new account
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
