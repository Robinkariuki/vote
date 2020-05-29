import *as actionType from '../actions/actionsType';



const initialState ={
    playstation:0,
    Xbox:0,
    PC:0,
}


const pollReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionType.Vote_Playstation:
            console.log('Your choice is Playstation!')
            return Object.assign({},state,{playstation:state.playstation+1})
        
        
        case actionType.Vote_Xbox:
            console.log('Your choice is Xbox!')
            return Object.assign({},state,{Xbox:state.Xbox+1})
        
        case actionType.Vote_PC:
             console.log('Your choice is PC!')
             return Object.assign({},state,{PC:state.PC+1})    
        
    default:
        return state
    }
        
}



export default pollReducer;