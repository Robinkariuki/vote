import React, {Component} from 'react';
import * as actions from '../store/actions/actions'
import { connect } from 'react-redux';
class Result extends Component{
    render(){
        console.log(this.props.state)
        return(
            
            <div>
              
            </div>
        )
    }
}



const mapDispatchToProps = dispatch =>{
    return {
        playstation: actions.VotePlaystation(),
        Xbox: actions.VoteXbox(),
        PC: actions.VotePc()
    }
    
}

export default connect(null,mapDispatchToProps)(Result)
