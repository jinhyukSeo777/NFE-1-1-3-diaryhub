export default async function deleteDiary(id: string) {
  const token = localStorage.getItem('authToken');
  if (!token) return;
  const res = await fetch(
    process.env.REACT_APP_API_BASE_URL + '/diaries/' + id,
    { method: 'DELETE', headers: { Authorization: 'Bearer ' + token } }
  );
  const data = await res.json();
  return data;
}
