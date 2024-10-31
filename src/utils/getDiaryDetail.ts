import login from './login';

export default async function getDiaryDetail(id: string) {
  const token = await login();
  const res = await fetch(
    process.env.REACT_APP_API_BASE_URL + 'diaries/' + id,
    {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    }
  );
  const data = await res.json();
  return data;
}
