import login from './login';
export default async function likeDiary(id: string) {
  const token = await login();
  const res = await fetch(
    process.env.REACT_APP_API_URL + 'diaries/like/' + id,
    { method: 'POST', headers: { Authorization: 'Bearer ' + token } }
  );
  const data = await res.json();
  return data.likes;
}
