import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Import your own reducer
import configureStore from '../redux/store';

function render(
  component,
  {
    initialState,
    store = configureStore(initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>
          {children}
        </Router>
      </Provider>
    );
  }
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
