import login from './login';

export default async function writeComment(
  id: string,
  comment: FormDataEntryValue
) {
  const token = await login();
  const res = await fetch(
    process.env.REACT_APP_API_BASE_URL + 'diaries/' + id + '/comments',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: comment,
      }),
    }
  );
  const data = await res.json();
  return data;
}
