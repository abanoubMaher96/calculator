import styled from 'styled-components'

export const Main = styled.div`
    width: 60%;
    //margin-left: 10%;
    min-height: 350px
    position: relative;
    margin-left: 18%;


`
export const Top = styled.div`
    width:100%;
    position: absolute;
    background-color: #2aF;
    border-radius: 5px;
`

export const Input = styled.input`
    width: 38%;
    height: 10%;
    margin-left: 10%
    box-sizing: border-box;
    background-color: #8fccf7ba;
    font-size: 20px;
    border-radius: 5px;
`
export const Keypad = styled.div`
    padding-left: 2%;
    padding-top: 1%;
    position: absolute;
    min-height: 50vh
    width: 100%;
    top: 19%;
    background-color: #51b7ffba;
    box-sizing: border-box;
    border-radius: 5px;
`

export const Button = styled.button`
    &:hover{
    transition-duration: 0.4s;
    background-color: ${props => (props.theme.bgCl ? "red" : '#4CAF50' )};
    color: white;
    }
    box-sizing: border-box;
    width: 22%;
    border: none;
    outline: none;
    height: 50px ;
    cursor: pointer;
    margin: 1%;
    border-radius: 10px;
    margin-left: ${props=>(props.theme.main )}
    background-color: ${props=>(props.theme.bgCl )}

`


