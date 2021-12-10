import Weather from './components/weather';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import './stylesheets/index.scss';

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
