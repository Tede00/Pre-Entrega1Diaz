import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBx7gF3s474K7uFl89V93tRmirUOoq4drQ",
  authDomain: "proyectocoder-534a0.firebaseapp.com",
  projectId: "proyectocoder-534a0",
  storageBucket: "proyectocoder-534a0.appspot.com",
  messagingSenderId: "89760473174",
  appId: "1:89760473174:web:d2b72a9807f580a472dbf7",
  measurementId: "G-8Z435L0KHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
