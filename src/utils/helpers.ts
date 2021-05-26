const dateParseFromTimestampToString = (timestamp:number) => {
  const date = new Date(timestamp);
  const dayAndMonth = date.toLocaleString('default', { day: 'numeric', month: 'numeric' });
  const year = date.getFullYear();
  return `${dayAndMonth}.${year}`;
};

export {
  dateParseFromTimestampToString
}
