import axios from 'axios';
import { Diary } from '../types/diaryTypes';

export const diaryAPI = {
  getMyDiaries: async (): Promise<Diary[]> => {
    const token = localStorage.getItem('authToken');
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/diaries/my-diaries?limit=10&skip=0`,
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
