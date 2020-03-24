export const dateFormat = date => {
  const instanceDate = new Date(date);
  const formattedDate = instanceDate
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
    .replace(/ /g, '-');
  return formattedDate;
};
