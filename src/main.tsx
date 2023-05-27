import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <PersistGate loading={<p>persist loading</p>} persistor={persistor}>
               <App />
            </PersistGate>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
);
