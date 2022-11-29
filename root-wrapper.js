import React from 'react';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import { store } from './src/state/store';

// eslint-disable-next-line react/display-name,react/prop-types
const RootWrapper = ({ element }) => {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        {element}
      </ParallaxProvider>
    </Provider>);
};

export default RootWrapper;
