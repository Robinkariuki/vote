import React from 'react'
import Result from './components/Results';
import {connect} from 'react-redux';

const App =(props)=>{
    // console.log(props.state)
    return(
        <div>
            <Result state={props.state}/>
        </div>
    )
}




const mapStateToProps =state=>({
    playstation:state.playstation,
    state
      
})



export default connect(mapStateToProps)(App);