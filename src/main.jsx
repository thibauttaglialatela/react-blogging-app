import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import PostContextProvider from "./utils/context/postContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PostContextProvider >
          <Router>
              <App />
          </Router>
      </PostContextProvider>
  </React.StrictMode>,
)
