import '../styles/globals.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import 'jquery';
import '@popperjs/core'; // Edit here
// import 'bootstrap/dist/js/bootstrap.bundle';
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return <Component {...pageProps} />
}

export default MyApp
