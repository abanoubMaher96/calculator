import {ADD_ITEM} from '../Actions/type'

const summation = (state= [] ,action )=>{
  
    let result = null
  
    if (action.type === ADD_ITEM){
        result = [...state, {text: action.z}]
        return result
    }

    return state;
}

export default summation;