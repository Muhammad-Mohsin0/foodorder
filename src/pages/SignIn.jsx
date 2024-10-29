import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import * as yup from "yup";

const userSignInSchema = yup
  .object({
    mail: yup
      .string()
      .trim()
      .email("Invalid Email")
      .required("Email is required"),
    pass: yup.string().required("Password is required"),
  })
  .required();

const initialValues = {
  mail: "",
  pass: "",
};

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const LoggedIn = localStorage.getItem("signin");
    if (LoggedIn === "true") {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = (values, action) => {
    console.log("values", values);
    localStorage.setItem("signin", true);
    navigate("/");
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
            <div className="">Email</div>
            <input
              className="border-2 rounded-lg px-2 py-2"
              type="text"
              name="mail"
              id="mail"
              placeholder="Enter your email"
              value={values.mail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mail && touched.mail ? (
              <div className="text-red-500">{errors.mail}</div>
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
              name="pass"
              id="pass"
              placeholder="Enter you password"
              value={values.pass}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.pass && touched.pass && (
              <div className="text-red-500">{errors.pass}</div>
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
