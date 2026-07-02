import React from 'react';
import ReactTestRenderer, {act} from 'react-test-renderer';
import App from '../App';

test('renders the starting screen and navigates to login', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer;

  await act(async () => {
    renderer = ReactTestRenderer.create(<App />);
  });

  expect(renderer.root.findByProps({children: 'Meet the Minds Behind the Words'})).toBeTruthy();

  const getStartedButton = renderer.root.findByProps({testID: 'get-started-button'});

  await act(async () => {
    getStartedButton.props.onPress();
  });

  expect(renderer.root.findByProps({testID: 'login-screen'})).toBeTruthy();
});
