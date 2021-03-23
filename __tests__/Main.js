import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import MainScreen from '../components/Main';

fetch = jest.fn(() => Promise.resolve());

it('renders correctly', () => {
  const tree = renderer.create(<MainScreen />);
  expect(tree).toMatchSnapshot();
});
