
const BASE_URL = "http://127.0.0.1:3000";

const jwt = localStorage.getItem('token');

async function getCustomers() {
  let data = [];
  const headers = {
    'authorization': `Bearer ${jwt}`,
    'Content-Type': 'application/json'
  };
  try { 
    const res = await fetch(`${BASE_URL}/api/v1/customers`, {
      method: 'GET',
      headers: headers
    });
    const resData = await res.json();

    data = [...resData.data.customers];

    return data;

  } catch (e) {
    console.log(e)
  }

}
async function getCustomer(id) { 
  try { 
    const res = await fetch(`${BASE_URL}/api/v1/customers/${id}`);
    const resData = await res.json();

    const data = {...resData.data.customer};

    return data;

  } catch (e) {
    console.log(e)
  }
}


async function createCustomer(data) {
  const {name, email, address, phoneNumber, lat, lng } = data;
  try {
    const res = await fetch(`${BASE_URL}/api/v1/customers`, {
      method: "POST",
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
async function editCustomer(data) { 
  const {id, name, email, address, phoneNumber, lat, lng } = data;
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
      method: 'DELETE'
    })
  } catch (e) {
    console.log(e)
  }
}


export { getCustomers, getCustomer, createCustomer, editCustomer, deleteCustomer }