import axios from "../axios";
const handleApiLogin = (email, password) => {
  console.log("login with username:", email, " and pw: ", password);
  return axios.post("/api/v1/user-login", { email, password });
};
const getAllUsers = (inputId) => {
  return axios.get("/api/v1/get-all-user", { params: { userId: inputId } });
};
export { handleApiLogin, getAllUsers };
