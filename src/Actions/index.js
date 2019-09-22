import { ADD_ITEM } from './type'


export const add_item = (text ,value) => {
    const action ={
        type: ADD_ITEM,
        z: text + value
    } 
    return action
}


















/* import {ADD ,SUB ,MULT ,DIV } from './type'

export const sum = (x , y ) => {
    const action ={
        type: ADD,
        z: parseFloat(x)+parseFloat(y)
    } 
    console.log('sum' , action)
    return action
}

export const sub = (x , y) => {
    const action ={
        type: SUB,
        z: x-y
    } 
    console.log('sum' , action)
    return action
}

export const mult = (x , y) => {
    const action ={
        type: MULT,
        z: x * y
    } 
    console.log('mult' , action)
    return action
}

export const div = (x , y) => {
    const action ={
        type: DIV,
        z: x / y
    } 
    console.log('mult' , action)
    return action
} */