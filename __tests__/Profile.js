import Profile from '../model/Profile';

const data = {
  avatarUrl: "https://avatars.githubusercontent.com/u/23608964?v=4",
  name: "Ray(Yu) Gu",
  login: "yu-gu",
  bio: "",
  websiteUrl: "https://www.linkedin.com/in/yu-gu/",
  email: "yugu28@hotmail.com",
  repositories: {
    totalCount: 9
  },
  followers: {
    totalCount: 3,
    nodes: [
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/22203901?u=5b1627b1ec68e6e659c71fa8101e4f358a19c012&v=4",
        name: "Kris Lai",
        login: "kriskirla"
      },
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/15624371?v=4",
        name: null,
        login: "syumet"
      },
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/16531358?v=4",
        name: "morganli",
        login: "MoranLi"
      }
    ]
  },
  following: {
    totalCount: 3,
    nodes: [
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/22203901?u=5b1627b1ec68e6e659c71fa8101e4f358a19c012&v=4",
        name: "Kris Lai",
        login: "kriskirla"
      },
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/15624371?v=4",
        name: null,
        login: "syumet"
      },
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/16531358?v=4",
        name: "morganli",
        login: "MoranLi"
      }
    ]
  },
  createdAt:"2016-11-20T04:49:47Z"
};

const temp = new Profile(data);
test('expect all success', () => {
  expect(temp.getLogo()).toEqual('https://avatars.githubusercontent.com/u/23608964?v=4');
  expect(temp.getName()).toEqual('Ray(Yu) Gu');
});
