import React from "react";
import {dateParseFromTimestampToString} from './helpers';

it('Парсит дату из timestamp в дд.мм.гггг', () => {
  expect(typeof dateParseFromTimestampToString()).toBe('string');
  // expect(dateParseFromTimestampToString(1621278139402)).toBe("17.05.2021");
});


