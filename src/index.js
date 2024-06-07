import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";

import reportWebVitals from './reportWebVitals';
import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"
import { store } from './Redux/store';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  styles: {
    global: {
      
      body: {
        bg: "white", // Set the background color to white
        
      },
    },
  },
  // Other theme configuration options
});

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Provider store = {store}>
      <CookiesProvider>
      <App />
      </CookiesProvider>
    </Provider>
    </BrowserRouter>
  </ChakraProvider>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
