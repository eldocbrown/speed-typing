import { wordCounter } from './wordCounter'

test('one word', () => {
  expect(wordCounter('word').words).toBe(1);
})

test('two words', () => {
  expect(wordCounter('word two').words).toBe(2);
})

test('no words', () => {
  expect(wordCounter('').words).toBe(0);
})
