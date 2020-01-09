import findBy from '../findBy';

test('findBy', () => {
  expect(JSON.stringify(findBy('name', 'value'))).toEqual(JSON.stringify((elem) => elem.name === 'value'));
});
