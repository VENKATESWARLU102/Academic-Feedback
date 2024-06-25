import Header from './components/Header.js';
import Home1 from './components/Home1.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './Container/About.js'
import Services from './Container/Services.js'
import Contact from './Container/Contact.js'
import Feedback from './components/Feedback.js'
import Feedbacktypes from './components/Feedbacktypes.js'
import Submittedfeedback from './Container/Submittedfeedback.js'
import Submittedsuccessfully from './Container/submittedsuccessfully.js'





function App(){
  return (
    <div>
      {/* <center> */}
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/home1' element={<Home1/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/feedbacktypes" element={<Feedbacktypes/>} />
          <Route path="/submittedfeedback" element={<Submittedfeedback/>} />
          <Route path="/submittedsuccessfully" element={<Submittedsuccessfully/>} />


        </Routes>
      </Router>
      {/* </center> */}
    </div>
  );
}
export default App;