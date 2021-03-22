import Repository from '../model/Repository';

const temp = new Repository(
  {
    name: '312',
    owner: {
      login: 'cogra',
    },
    description: 'good',
  },
);
test('expect all success', () => {
  expect(temp.getName()).toEqual('312');
  expect(temp.getUsername()).toEqual('cogra');
  expect(temp.getDescription()).toEqual('good');
});
