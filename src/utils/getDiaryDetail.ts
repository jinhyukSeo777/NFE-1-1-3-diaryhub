export default async function getDiaryDetail(id: string) {
  try {
    const res = await fetch(
      process.env.REACT_APP_API_BASE_URL + '/diaries/' + id,
      {
        method: 'GET',
      }
    );
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return undefined;
  }
}
