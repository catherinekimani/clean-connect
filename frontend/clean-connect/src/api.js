import axios from "axios";

const api = "http://127.0.0.1:8000/api/";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${api}users/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
