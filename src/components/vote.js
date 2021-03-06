import React, {Component} from 'react';
import {VotePc,VotePlaystation,VoteXbox} from '../store/actions/actions'
import { connect } from 'react-redux';
import pc from '../images/pc.jpeg'
import ps from '../images/Ps.jpeg'
import Xbox from '../images/Xbox.jpg'
import con from '../images/con.png'
class Vote extends Component{

    handleVotePc =()=>{
        this.props.PC()
    }
    handleVotePlaystation =()=>{
        this.props.playstation()
    }

    handleVoteXbox = ()=>{
        this.props.Xbox()
    }


    render(){
        console.log(this.props.state.PC)
        return(
            
            <div className='container'>
               <div className="jumbotron" style={{'textAlign': 'center'}}>
          <img src={con} height="96" alt="Gaming"></img>
          <h2>What is your favorite Gaming choice?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-6 col-md-4 view">
              <img src={ps} height="96" alt="playstation" onClick={this.handleVotePlaystation} className="hoverable"></img>
            </div>
            <div className="col-6 col-md-4">
              <img src={pc} height="96" alt="pc" onClick={this.handleVotePc} className="hoverable"></img>
            </div>
            <div className="col-6 col-md-4">
              <img src={Xbox} height="96" alt="xbox" onClick={this.handleVoteXbox}className="hoverable"></img>
            </div>
            </div>
            </div>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch =>{
    return {
        playstation:()=>dispatch(VotePlaystation()),
        Xbox: ()=>dispatch(VoteXbox()),
        PC: ()=>dispatch(VotePc())
    }
    
}

export default connect(null,mapDispatchToProps)(Vote)
