import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux'
import { store } from './Redux/store.js';
// import 'bootstrap/dist/css/bootstrap.min.css';


// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>

)
