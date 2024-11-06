export default async function getDiaryComments(id: string) {
  try {
    const res = await fetch(
      process.env.REACT_APP_API_BASE_URL + '/diaries/' + id + '/comments',
      {
        method: 'GET',
      }
    );
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    return data.reverse();
  } catch (error) {
    return null;
  }
}
