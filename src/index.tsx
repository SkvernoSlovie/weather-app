import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { createGlobalStyle } from 'styled-components';

import App from './components/App/App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    overflow: scroll;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
