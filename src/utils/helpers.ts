import { autorun, set, toJS } from 'mobx';

const dateParseFromTimestampToString = (timestamp: number) => {
  const date = new Date(timestamp);
  const dayAndMonth = date.toLocaleString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric' });
  return `${dayAndMonth}`;
};

function autoSave(_this: any, name: string) {
  const storedJson = localStorage.getItem(name);
  if (storedJson) {
    set(_this, JSON.parse(storedJson));
  }
  autorun(() => {
    const value = toJS(_this);
    localStorage.setItem(name, JSON.stringify(value));
  });
}

export {
  dateParseFromTimestampToString,
  autoSave,
};
