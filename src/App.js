import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigStore } from './redux/Store';
import { AuthProvider } from './firebase/AuthProvider'
import Main from './components/MainComponent';

const store = ConfigStore();

const App = () => {
  
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <div>
            <Main  />
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  )
}

export default App
