
import './App.css';
import Main_Routers from './componets/Main_Routers';
// import GlobalLoader from './componets/GlobalLoader';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import "toastify-js/src/toastify.css";
import GlobalLoader from './componets/GlobalLoader';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false, // ✅ ताकि हर बार scroll पर animation चले
    });
  }, []);
  const location = useLocation()
  const productLoading = useSelector(state => state.Product.loading || false)
  // show loader briefly on route change or while productLoading
  const [navigating, setNavigating] = React.useState(false)

  useEffect(() => {
    setNavigating(true)
    const t = setTimeout(() => setNavigating(false), 250) // small debounce while route changes
    return () => clearTimeout(t)
  }, [location.pathname])
  const loaderVisible = navigating || productLoading

  return (
    <>
      <GlobalLoader visible={loaderVisible} />
      <Main_Routers />
      <div className="container-fluid flex justify-center items-center">

        <div className="container">
        </div>
      </div>
    </>
  );
}

export default App;
