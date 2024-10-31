export default async function likeDiary(id: string) {
  const token = localStorage.getItem('authToken');
  if (!token) return;
  console.log(token);
  const res = await fetch(
    process.env.REACT_APP_API_BASE_URL + '/diaries/like/' + id,
    { method: 'POST', headers: { Authorization: 'Bearer ' + token } }
  );
  const data = await res.json();
  return data.likes;
}
