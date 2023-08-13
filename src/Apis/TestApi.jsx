import axios from "axios";
import { env } from "../config/EnvironmentConfig";

async function testData() {
  try {
    const response = await axios.get(`${env.API_ENDPOINT_URL}/courses`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function login({ userName, password }) {
  try {
    const response = await axios({
      method: "post",
      url: `${env.API_ENDPOINT_URL}/credentials/login`,
      data: { userName, password },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

async function register({ userName, password }) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios({
      method: "post",
      url: `${env.API_ENDPOINT_URL}/credentials/register`,
      headers: { Authorization: `Bearer ${token}` },
      data: { userName, password },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

async function edit({ userName, password, id }) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios({
      method: "put",
      url: `${env.API_ENDPOINT_URL}/credentials/edit/${id._id}`,
      headers: { Authorization: `Bearer ${token}` },
      data: { userName, password },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

async function loginCreds() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${env.API_ENDPOINT_URL}/credentials`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.response.statusText);
    if (error.response.statusText === "Unauthorized") {
      localStorage.removeItem("token");
    }
    throw new Error(error);
  }
}
async function user() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${env.API_ENDPOINT_URL}/credentials/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export { edit, login, loginCreds, register, testData, user };
