export default async function getDiaryComments(id: string) {
  const res = await fetch(
    process.env.REACT_APP_API_BASE_URL + '/diaries/' + id + '/comments',
    {
      method: 'GET',
    }
  );
  const data = await res.json();
  return data;
}
