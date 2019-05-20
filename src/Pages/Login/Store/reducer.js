import {fromJS} from 'immutable'
import {constans} from './index'
const defaultState=fromJS({
    username:'x',
    password:'xxx'
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constans.CHANGEINPUT:
           return state.set(action.name,action.value) 
        default :
          return state   
    }
}

