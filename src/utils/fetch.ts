import login from './login';

export default async function Fetch() {
  const token = await login();
  const res = await fetch(
    process.env.REACT_APP_API_URL + 'diaries/public-diaries',
    {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
}
