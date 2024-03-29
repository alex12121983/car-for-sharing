import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';
import './index.css';
// import { persistor } from 'redux-persist';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/car-for-sharing">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
