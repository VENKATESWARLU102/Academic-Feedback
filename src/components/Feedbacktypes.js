import React,{useState} from 'react'
import Header from './Header'
import './Feedbacktypes.css'
import { useNavigate,useLocation } from 'react-router-dom'


function Feedbacktypes  () {
    const location=useLocation()
    const history=useNavigate();
    function submit(e){
        history('/feedback', { state: location.state });
    }
  return (
    <div>
        <Header />
        
        {/* Feedbacktypes */}
        fdfghkl;/l
        <div className='feedbacktypescontainer'>
            <div className='collegefeedback'>
                <div className='collegefeedbackimg'>
                    
                </div>
                <div className='feedbackbutton'>
                <input type='submit' onClick={submit} />
                </div>
            </div>
            
           
        </div>
        
    </div>
  )
}

export default Feedbacktypes