export const timeFormat = time => {
  const format = new Date(time).toLocaleTimeString('es-ES');
  return format;
};
