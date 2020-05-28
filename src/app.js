import React from 'react'
import Home from './components/home';
import {connect} from 'react-redux';

const App =()=>{
    return(
        <div>
            <Home/>
        </div>
    )
}




const mapStateToProps =state=>{
      
}

export default connect(mapStateToProps)(App);