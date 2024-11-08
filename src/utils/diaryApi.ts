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
    return null;
  }
};

export const deleteDiary = async (id: string) => {
  return axios.delete(`${BASE_URL}/diaries/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};

export const getComment = async (id: string) => {
  try {
    const data = await axios.get(`${BASE_URL}/diaries/${id}/comments`);
    return data.data.reverse();
  } catch (error) {
    return null;
  }
};

export const createComment = async (id: string, formData: FormData) => {
  try {
    return await axios.post(`${BASE_URL}/diaries/${id}/comments`, formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteComment = async (diaryId: string, commentId: string) => {
  return axios.delete(`${BASE_URL}/diaries/${diaryId}/comments/${commentId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};

export const paintStamp = async (id: string) => {
  try {
    if (!TOKEN) throw Error();
    const data = await axios.post(
      `${BASE_URL}/diaries/like/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    return data.data.likes;
  } catch (error) {
    return null;
  }
};

export const fetchPublicDiariesByRegion = async (
  state: string,
  skip: number
) => {
  const response = await axios.get(
    `${BASE_URL}/diaries/public-diaries?state=${state}&limit=10&skip=${skip}`
  );
  return response.data;
};

export const diaryAPI = {
  getMyDiaries: async (skip: number) => {
    const response = await axios.get(
      `${BASE_URL}/diaries/my-diaries?limit=9&skip=${skip}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    return response.data;
  },
};

export const getWriterApi = {
  getMyDiaries: async (username: string, skip: number) => {
    const response = await axios.get(
      `${BASE_URL}/diaries/public-diaries/${username}?limit=9&skip=${skip}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    return response.data;
  },
};
