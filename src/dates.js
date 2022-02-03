export function stringifyDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function parseDate(dateString) {
  let [year, month, day] = dateString.split("-");
  month = month - 1;
  const date = new Date(year, month, day);
  return date;
}