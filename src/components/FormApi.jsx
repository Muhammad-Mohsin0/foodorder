import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

const manualOrderSchema = yup.object({
  name: yup.string().required("Name is required"),
  mobile_number: yup.string().required("Mobile number is required"),
  address: yup.string().required("Address is required"),
  product_name: yup.string().required("Product name is required"),
  product_image: yup
    .string()
    .url("Must be a valid URL")
    .required("Product image URL is required"),
  quantity: yup.number().required("Quantity is required").positive(),
  unit: yup.string().required("Unit is required"),
  order_details: yup.string().required("Order details are required"),
});

const ManualOrderForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        mobile_number: "",
        address: "",
        product_name: "",
        product_image: "",
        quantity: "",
        unit: "",
        order_details: "",
      },
      validationSchema: manualOrderSchema,
      onSubmit: async (values, actions) => {
        const token = localStorage.getItem("authToken");
        if (!token) {
          alert("Token is missing. Please log in.");
          return;
        }

        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/manualorders/",
            values,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          alert("Order placed successfully!");
          actions.resetForm();
        } catch (error) {
          console.error("Order error:", error);
          if (error.response && error.response.status === 401) {
            alert("Unauthorized: Invalid token.");
          } else {
            alert("An error occurred while placing the order.");
          }
        }
      },
    });

  return (
    <div className="flex justify-center bg-gradient-to-r from-orange-300 from-10% via-sky-100 via-30% to-yellow-200 to-90%">
      <div className="relative md:bg-white bg-orange-400 md:w-[50%] w-[100%] h-screen flex justify-center">
        <form
          className="w-[100%] flex flex-col justify-center bg-white space-y-4 rounded-lg m-10 items-center"
          onSubmit={handleSubmit}
        >
          <div className="text-4xl font-bold text-primary">Place Order</div>
          <br />

          {[
            { name: "name", label: "Name" },
            { name: "mobile_number", label: "Mobile Number" },
            { name: "address", label: "Address" },
            { name: "product_name", label: "Product Name" },
            { name: "product_image", label: "Product Image URL" },
            { name: "quantity", label: "Quantity", type: "number" },
            { name: "unit", label: "Unit" },
            { name: "order_details", label: "Order Details" },
          ].map((field, idx) => (
            <div key={idx} className="w-[80%] flex flex-col">
              <label htmlFor={field.name}>{field.label}</label>
              <input
                className="border-2 rounded-lg px-2 py-2"
                type={field.type || "text"}
                name={field.name}
                placeholder={`Enter ${field.label}`}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors[field.name] && touched[field.name] ? (
                <div className="text-red-500">{errors[field.name]}</div>
              ) : null}
            </div>
          ))}

          <button
            className="font-bold px-2 py-2 bg-gray-400 text-white rounded-lg border-0 w-[80%] cursor-pointer"
            type="submit"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManualOrderForm;
