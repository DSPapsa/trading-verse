import React from 'react';
import Product from '../../Components/Product/Product';
import './Home.css'
function Home() {
  return (
    <div className='home'>
         
             <div className='home_row'>
           <Product
           id='23452345'
           title='Trading Bot'
           price={3000}
           className="homeImage"
           image='https://tutsnode.com/wp-content/uploads/2021/09/Trading-Bot-with-Python.jpg'
             /> 
             <Product
           id='12341234'
           title='Crypto-Trading'
           price={8000}
           className="homeImage"
           image='https://i.ytimg.com/vi/W5gz25iQI_0/maxresdefault.jpg'
             /> 
             <Product
           id='34123412'
           title='Trading'
           price={5000}
           className="homeImage"
           image='https://i.ytimg.com/vi/fjNJmPYH3S8/maxresdefault.jpg'
             /> 
             </div>
         
    </div>
  );
        
}

export default Home;

