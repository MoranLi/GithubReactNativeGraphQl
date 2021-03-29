import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import MainScreen from '../components/Main';
import fetchMock from "fetch-mock";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

const data = {
  "data": {
    "viewer": {
      "avatarUrl": "https://avatars.githubusercontent.com/u/16531358?v=4",
      "name": "morganli",
      "login": "MoranLi",
      "bio": "this is bio",
      "websiteUrl": "https://www.linkedin.com/in/yukun-li/",
      "email": "moran.li@usask.ca",
      "repositories": {
        "totalCount": 79
      },
      "followers": {
        "totalCount": 8,
        "nodes": [
          {
            "avatarUrl": "https://avatars.githubusercontent.com/u/15624371?v=4",
            "name": null,
            "login": "syumet"
          },
          {
            "avatarUrl": "https://avatars.githubusercontent.com/u/26753671?v=4",
            "name": "YuYuan Liu",
            "login": "codeYuyuan"
          },
          {
            "avatarUrl": "https://avatars.githubusercontent.com/u/13296643?u=a14b71a6ce0a733e6f27c90bf629d2c135802a03&v=4",
            "name": "medifle",
            "login": "medifle"
          },
          {
            "avatarUrl": "https://avatars.githubusercontent.com/u/6201488?u=878eddf10b1afc8565cb6846958ab677f61903ac&v=4",
            "name": "Erik Tetland",
            "login": "ert485"
          },
          {
            "avatarUrl": "https://avatars.githubusercontent.com/u/32078989?v=4",
            "name": "eric",
            "login": "taz992"
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
            "avatarUrl": "https://avatars.githubusercontent.com/u/8394389?u=3e577cb023d709707ebbf00230125543e1093ada&v=4",
            "name": "Yige",
            "login": "Katajam"
          }
        ]
      },
      "following": {
        "totalCount": 11,
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
      },
      "createdAt": "2016-01-04T01:24:51Z"
    }
  }
};

test('renders correctly', async () => {
  fetchMock.post("https://api.github.com/graphql", data);
  const wrapper = renderer.create( <MainScreen /> );
  await wrapper.getInstance().componentDidMount();
  expect(wrapper).toMatchSnapshot();
});

it('navigates on button press', async () => {
  const push = { navigate: jest.fn() };
  const wrapper = renderer.create( <MainScreen navigation={push}/> );
  await wrapper.getInstance().componentDidMount();
  fireEvent.press(wrapper.root.findAllByProps({title : "Following: 11"})[0]);
  const expectD = JSON.parse('[{"avatarUrl": "https://avatars.githubusercontent.com/u/11371924?u=0186c8e0405df60c5fa942dd05f55e1cd7409368&v=4", "login": "forezp", "name": "方志朋"}, {"avatarUrl": "https://avatars.githubusercontent.com/u/26753671?v=4", "login": "codeYuyuan", "name": "YuYuan Liu"}, {"avatarUrl": "https://avatars.githubusercontent.com/u/22850900?u=6d871aa35cc48254f33f433e43adf832606c210d&v=4", "login": "jiahuan-he", "name": "Geoffrey"}, {"avatarUrl": "https://avatars.githubusercontent.com/u/3013575?u=328990cd000c08418bc204812b555761f1691c90&v=4", "login": "buckyoung", "name": "Buck Young"}, {"avatarUrl": "https://avatars.githubusercontent.com/u/25192222?v=4", "login": "xuz426", "name": null}, {"avatarUrl": "https://avatars.githubusercontent.com/u/23608964?v=4", "login": "yu-gu", "name": "Ray(Yu) Gu"}, {"avatarUrl": "https://avatars.githubusercontent.com/u/15624371?v=4", "login": "syumet", "name": null}, {"avatarUrl": "https://avatars.githubusercontent.com/u/6639067?v=4", "login": "flowfire", "name": null}, {"avatarUrl": "https://avatars.githubusercontent.com/u/19878158?u=b97d111aedda7b35563cff2be6a1477e38167efc&v=4", "login": "mjvDEV", "name": "Michael van der Kamp"}, {"avatarUrl": "https://avatars.githubusercontent.com/u/4583692?u=8a94c58b4913bef2557a3413d3112d493328b7c7&v=4", "login": "knames", "name": "Ken Slawinski"}, {"avatarUrl": "https://avatars.githubusercontent.com/u/8394389?u=3e577cb023d709707ebbf00230125543e1093ada&v=4", "login": "Katajam", "name": "Yige"}]');
  expect(push.navigate).toHaveBeenCalledWith('Following',expectD);
});
