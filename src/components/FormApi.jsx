import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

const manualOrderSchema = yup.object({
  name: yup.string().required("Name is required"),
  mobile_number: yup.string().required("Mobile number is required"),
  address: yup.string().required("Address is required"),
  product_name: yup.string().required("Product name is required"),
  product_image: yup.mixed().required("Product image is required"), // expects a file upload
  quantity: yup.number().required("Quantity is required"),
  unit: yup.string().required("Unit is required"),
  order_details: yup.string().required("Order details are required"),
});

const ManualOrderForm = () => {
  const [orders, setOrders] = useState([]); // State to store GET data
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      mobile_number: "",
      address: "",
      product_name: "",
      product_image: null, // initialize as null for file upload
      quantity: "",
      unit: "",
      order_details: "",
    },
    validationSchema: manualOrderSchema,
    onSubmit: async (values, actions) => {
      const token = localStorage.getItem("authToken");
      const csrfToken = localStorage.getItem("csrfToken");

      if (!token) {
        alert("Token is missing. Please log in.");
        return;
      }

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("mobile_number", values.mobile_number);
      formData.append("address", values.address);
      formData.append("product_name", values.product_name);
      formData.append("product_image", values.product_image); // Attach file directly
      formData.append("quantity", values.quantity);
      formData.append("unit", values.unit);
      formData.append("order_details", values.order_details);

      try {
        await axios.post("http://127.0.0.1:8000/api/manualorders/", formData, {
          headers: {
            Authorization: `Token ${token}`,
            "X-CSRFTOKEN": csrfToken,
            "Content-Type": "multipart/form-data",
          },
        });

        alert("Order placed successfully!");
        actions.resetForm();
        fetchOrders(); // Refresh the orders list
      } catch (error) {
        console.error("Order error:", error);
        if (error.response) {
          alert(
            `Error: ${
              error.response.data.product_image ||
              "An error occurred while placing the order."
            }`
          );
        } else {
          alert("An error occurred while placing the order.");
        }
      }
    },
  });

  // Function to fetch orders on component mount
  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        "http://127.0.0.1:8000/api/manualorders/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setOrders(response.data); // Set fetched data to state
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchOrders(); // Fetch orders on component load
  }, []);

  return (
    <div className="flex flex-col items-center bg-white w-full min-h-screen py-10">
      <div className="relative md:bg-white bg-orange-400 md:w-[50%] w-[100%] h-screen flex justify-center">
        <form
          className="w-[80%] max-w-3xl flex flex-col bg-white space-y-4 rounded-lg p-10 shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="text-4xl font-bold text-primary">Place Order</div>
          <br />

          {[
            { name: "name", label: "Name" },
            { name: "mobile_number", label: "Mobile Number" },
            { name: "address", label: "Address" },
            { name: "product_name", label: "Product Name" },
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

          <div className="w-[80%] flex flex-col">
            <label htmlFor="product_image">Product Image</label>
            <input
              className="border-2 rounded-lg px-2 py-2"
              type="file"
              name="product_image"
              onChange={(event) => {
                setFieldValue("product_image", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
            />
            {errors.product_image && touched.product_image ? (
              <div className="text-red-500">{errors.product_image}</div>
            ) : null}
          </div>

          <button
            className="font-bold px-2 py-2 bg-gray-400 text-white rounded-lg border-0 w-[80%] cursor-pointer"
            type="submit"
          >
            Place Order
          </button>
        </form>

        {/* Display orders */}
        <div className="w-[80%] mt-8 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Orders List</h2>
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">User</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Unit</th>
                <th className="border border-gray-300 px-4 py-2">
                  Order Details
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Product Image
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.user}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.product_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.unit}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.order_details}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={order.product_image}
                      alt={order.product_name}
                      className="w-20 h-20"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManualOrderForm;
