import toast from "react-hot-toast";
import Cookies from 'js-cookie';

const BASE_URL = "http://127.0.0.1:3000";

async function getCustomers() {
  const jwt = localStorage.getItem("token");

  // COOKIES 
  const token = Cookies.get('jwt');
  console.log("cookies apiServices",token);

  let data = [];
  const headers = {
    authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  };
  try {
    const res = await fetch(`${BASE_URL}/api/v1/customers`, {
      method: "GET",
      credentials: "include",
      headers: headers,
    });
    const resData = await res.json();

    data = [...resData.data.customers];

    return data;
  } catch (e) {
    console.log(e);
  }
}
async function getCustomer(id) {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/customers/${id}`);
    const resData = await res.json();

    const data = { ...resData.data.customer };

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function createCustomer(data) {
  // console.log("API SERVICES CREATE CUSTOMER", data);

  try {
    const res = await fetch(`${BASE_URL}/api/v1/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("res", res);

    if (!res.ok) {
      throw new Error("Failed to send data to backend");
    }

    const dataRes = await res.json();

    // console.log("API SERVICES CREATE CUSTOMER RESPONSE DATA", dataRes);

    toast.success("Customer created successfully!", {
      duration: 10000,
      position: "top-center",
      className: "toast",
    });
  } catch (e) {
    console.error("Error sending data to backend:", e);
    toast("Failed to send data to backend");
  }
}
async function editCustomer(data) {
  const { id, name, email, address, phoneNumber, lat, lng } = data;
  try {
    const res = await fetch(`${BASE_URL}/api/v1/customers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        address,
        phoneNumber,
        position: {
          lat,
          lng,
        },
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to send data to backend");
    }

    const dataRes = await res.json();
  } catch (e) {
    console.error("Error sending data to backend:", e);
  }
}

async function deleteCustomer(id) {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/customers/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
}

export {
  getCustomers,
  getCustomer,
  createCustomer,
  editCustomer,
  deleteCustomer,
};
