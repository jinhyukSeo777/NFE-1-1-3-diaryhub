import login from './login';

export default async function writeComment(diaryId: string, commentId: string) {
  const token = await login();
  const res = await fetch(
    process.env.REACT_APP_API_URL +
      'diaries/' +
      diaryId +
      '/comments/' +
      commentId,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
}
