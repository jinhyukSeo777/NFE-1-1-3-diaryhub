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

export const getDiary = async (id: string) => {
  try {
    const data = await axios.get(`${BASE_URL}/diaries/${id}`);
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteDiary = async () => {};

export const getComment = async (id: string) => {
  try {
    const data = await axios.get(`${BASE_URL}/diaries/${id}/comments`);
    return data.data.reverse();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createComment = async () => {};

export const deleteComment = async () => {};

export const paintStamp = async () => {};
