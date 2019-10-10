/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman("string")).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(0)).toBe('0 B')
expect(convertBytesToHuman(100000)).toBe('97.66 KB')
expect(convertBytesToHuman(9876543210)).toBe('9.2 GB')
});

// другая группа проверок

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(-100)).toBe(false)
  expect(convertBytesToHuman(-4242141241241)).toBe(false)
});

test('Возвращает false для слишком больших чисел (когда не умещаемся в Петабайты)', () => {
  expect(convertBytesToHuman(992394398923842394802384092384203842390482)).toBe(false)
  expect(convertBytesToHuman(999312023912083241274761531611111163627362736)).toBe(false)
});
