export default async function login() {
  const token = localStorage.getItem('token') || undefined;
  if (token) return token;

  console.log('새로 로그인 함');
  const id = {
    username: 'u123',
    password: 'p123',
  };
  const res = await fetch(process.env.REACT_APP_API_URL + 'auth/login', {
    method: 'POST',
    body: JSON.stringify(id),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  localStorage.setItem('token', data.token);

  return data.token;
}
