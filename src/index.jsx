import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from '@/App';
import GlobalStyles from '@/styles/GlobalStyles';

render(
  <Router>
    <GlobalStyles />
    <App />
  </Router>,
  document.getElementById('root'),
);
