import axios from 'axios';
const url = process.env.REACT_APP_API_URL;

export const login = async (formData) => {
  return await axios.post("https://social-media-back-end.vercel.app/api/auth/login/", formData);
};

export const register = async (formData) => {
  return await axios.post("https://social-media-back-end.vercel.app/api/auth/register/", formData);
};
