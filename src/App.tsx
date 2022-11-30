import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouter';
import './assets/fonts/css/font.css'
import store from './redux/store';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 h-full">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
