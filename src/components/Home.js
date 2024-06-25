import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom';

function Home (){
    const  location=useLocation()
  return (
    <div>
        <h1>hello {location.state.id} welcome too home page</h1>
    </div>
  )
}
export default Home;