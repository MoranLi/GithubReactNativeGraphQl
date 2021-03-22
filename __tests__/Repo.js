import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import RepoScreen from '../components/Repo.jsx';

fetch = jest.fn(() => Promise.resolve());

it('renders correctly', () => {
  const tree = renderer.create(<RepoScreen />);
  expect(tree).toMatchSnapshot();
});
