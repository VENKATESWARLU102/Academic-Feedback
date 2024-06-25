// // Home.js
// import React from 'react';
// import Header from '../components/Header';
// import {useNavigate,useLocation} from 'react-router-dom';
// // import './Home.css'

// function Home1() {
//   const  location=useLocation()
//   const history=useNavigate();
//   function submit(e){
//     history('/feedbacktypes',{ state: location.state });
//   }
//   return (
//     <div>
//       <Header/>
//       <h2>Home</h2>
      
//       <p>Welcogfhgme to our website! </p>lorem
//       <input type ='submit' onClick={submit}/>
//       {/* <input type='submit'></input> */}
//     </div>
//   );
// }

// export default Home1;

import React from 'react';
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home1.css';

function Home1() {
  const location = useLocation();
  const history = useNavigate();

  function submit(e) {
    history('/feedbacktypes', { state: location.state });
  }

  return (
    <div className="home-bg">
      <Header />
      <h2>Home</h2>
      
      <p>Welcome to our website!</p>
      
      {/* <div className="image-container">
        <img src="https://cotbc.org/wp-content/uploads/shutterstock_200694206-1600x900-1.jpg" alt="Description of the image" className="home-image" />
      </div> */}
      <input type="button" onClick={submit} value="Go to Feedback Types" className="submit-button" />

    
    </div>
  );
}

export default Home1;
