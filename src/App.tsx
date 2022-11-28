import React from 'react';
import { AppRouter } from './AppRouter';
import './assets/fonts/css/font.css'

const App: React.FC = ()=> {
  return (
    <div className="bg-gray-50 h-screen">
      <AppRouter/>
    </div>
  );
}

export default App;
