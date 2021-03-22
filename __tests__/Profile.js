import Profile from '../model/Profile';

const temp = new Profile({
  avatarUrl: 'https://avatars.githubusercontent.com/u/16531358?v=4',
  name: 'Hello',
  login: 'MorganLi',
  bio: 'who am i',
  websiteUrl: 'a.com',
  email: 'aabb.com',
  repositories: {
    totalCount: 82,
  },
  followers: {
    totalCount: 9,
  },
  following: {
    totalCount: 10,
  },
  createdAt: '2015-01-04T01:24:51Z',
});
test('expect all success', () => {
  expect(temp.getLogo()).toEqual('https://avatars.githubusercontent.com/u/16531358?v=4');
  expect(temp.getName()).toEqual('Hello');
});
