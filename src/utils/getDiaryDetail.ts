export default async function getDiaryDetail(id: string) {
  const res = await fetch(
    process.env.REACT_APP_API_BASE_URL + '/diaries/' + id,
    {
      method: 'GET',
    }
  );
  const data = await res.json();
  return data;
}
