import React from 'react'
import Vote from './components/vote';
import {connect} from 'react-redux';
import Results from './components/results'
const App =(props)=>{
    // console.log(props.state)
    return(
        <div>
            <Vote state={props.state}/>
            <Results state={props.state}/>
        </div>
    )
}




const mapStateToProps =state=>({
    playstation:state.playstation,
    state
      
})



export default connect(mapStateToProps)(App);