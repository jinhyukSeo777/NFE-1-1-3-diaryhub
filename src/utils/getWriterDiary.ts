import axios from 'axios';
import { Diary } from '../types/diaryTypes';

export const getWriterApi = {
  getMyDiaries: async (username: string, skip: number): Promise<Diary[]> => {
    const token = localStorage.getItem('authToken');
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/diaries/public-diaries/${username}?limit=9&skip=${skip}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
};
