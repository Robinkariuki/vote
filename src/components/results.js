import React, {Component} from 'react'


class Results extends Component {
    VotesInPercentagePlaystation=()=>{
        if(this.props.state.playstation){
        return(this.props.state.playstation/(this.props.state.playstation+this.props.state.Xbox+this.props.state.PC))*100      
    }else{
        return 0
    }
    }



    VotesInPercentageXbox=()=>{
        if(this.props.state.Xbox){
        return(this.props.state.Xbox/(this.props.state.Xbox+this.props.state.playstation+this.props.state.PC))*100      
    }else{
        return 0
    }
    }


    VotesInPercentagePC=()=>{
        if(this.props.state.PC){
        return(this.props.state.PC/(this.props.state.PC+this.props.state.Xbox+this.props.state.playstation))*100      
    }else{
        return 0
    }
    }



    votesplaystationInPercentageStyle=()=>{
        return {
          width: this.VotesInPercentagePlaystation()+'%'
        }
      }
      
    votesPcInPercentageStyle=()=>{
        return {
          width: this.VotesInPercentagePC()+'%'
        }
      }

    votesXboxInPercentageStyle=()=>{
        return {
          width: this.VotesInPercentageXbox()+'%'
        }
      }



    
    render(){
        return(<div>
                    <span className="label label-danger">playstation: {this.VotesInPercentagePlaystation().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={this.votesplaystationInPercentageStyle()}></div>
        </div>
        <span className="label label-info">Xbox: {this.VotesInPercentageXbox().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-info" style={this.votesXboxInPercentageStyle()}></div>
        </div>
        <span className="label label-success">PC: {this.VotesInPercentagePC().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-success" style={this.votesPcInPercentageStyle()}></div>
        </div>
       


        </div>)
    }
}



export default Results;