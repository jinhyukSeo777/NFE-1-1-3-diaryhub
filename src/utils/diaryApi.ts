import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TOKEN = localStorage.getItem('authToken');

export const createDiary = async (formData: FormData) => {
  return axios.post(`${BASE_URL}/diaries`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};

export const editDiary = async (id: string, formData: FormData) => {
  return axios.put(`${BASE_URL}/diaries/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};
