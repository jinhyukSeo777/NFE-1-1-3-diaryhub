export const DiaryDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  return new Date(date)
    .toLocaleDateString('ko-KR', options)
    .replace(/\//g, '.');
};
