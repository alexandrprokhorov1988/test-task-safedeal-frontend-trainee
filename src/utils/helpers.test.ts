import {dateParseFromTimestampToString} from './helpers';

it('Парсит дату из timestamp в дд.мм.гггг', () => {
  expect(typeof dateParseFromTimestampToString(2131231213)).toBe('string');
});
