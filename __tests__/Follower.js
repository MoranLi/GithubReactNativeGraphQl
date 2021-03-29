import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import FollowerScreen from '../components/Follower';


const data = {
  "nodes": [
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/11371924?u=0186c8e0405df60c5fa942dd05f55e1cd7409368&v=4",
      "name": "方志朋",
      "login": "forezp"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/26753671?v=4",
      "name": "YuYuan Liu",
      "login": "codeYuyuan"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/22850900?u=6d871aa35cc48254f33f433e43adf832606c210d&v=4",
      "name": "Geoffrey",
      "login": "jiahuan-he"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/3013575?u=328990cd000c08418bc204812b555761f1691c90&v=4",
      "name": "Buck Young",
      "login": "buckyoung"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/25192222?v=4",
      "name": null,
      "login": "xuz426"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/23608964?v=4",
      "name": "Ray(Yu) Gu",
      "login": "yu-gu"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/15624371?v=4",
      "name": null,
      "login": "syumet"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/6639067?v=4",
      "name": null,
      "login": "flowfire"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/19878158?u=b97d111aedda7b35563cff2be6a1477e38167efc&v=4",
      "name": "Michael van der Kamp",
      "login": "mjvDEV"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/4583692?u=8a94c58b4913bef2557a3413d3112d493328b7c7&v=4",
      "name": "Ken Slawinski",
      "login": "knames"
    },
    {
      "avatarUrl": "https://avatars.githubusercontent.com/u/8394389?u=3e577cb023d709707ebbf00230125543e1093ada&v=4",
      "name": "Yige",
      "login": "Katajam"
    }
  ]
};

test('renders correctly', async () => {
  const d = {params: data};
  const wrapper = renderer.create( <FollowerScreen route={d}/> );
  expect(wrapper).toMatchSnapshot();
});
