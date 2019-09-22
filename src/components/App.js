import React , {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {add_item } from '../Actions';
import  {Button ,Main ,Input ,Keypad ,Top} from './style';
import * as math from 'mathjs';

class App extends Component{
    state={
        x: '',
        y: '',
        z: '',
        text: ''

    }

    rendersum = () => {
        return (
            <div>
                {
                    this.props.sum.z
                }
            </div>
        )
    }
    //e === "+" || e === "-" || e === "*" || e === "/"
    typing = (e) =>{
        var numbers = /^[-+]?[0-9]+$/;
        var lastLetter = e.slice(-1);
        if( lastLetter.match(numbers) || lastLetter === "+" || lastLetter === "-" || lastLetter === "*" || lastLetter === "/" ){
            this.setState({ text: e })
        }
    }

    handleEnter= (e) =>{
        if(e.keyCode == 13){
            this.handleEqual()
        }
    }

    handleEqual = () =>{
        this.setState({text: math.evaluate(this.state.text)})
    }

    render(){
        console.log(this.state.text)
        return(
            <Fragment>
                
              <Main>
                <Top>
                    <Input 
                        type="text" 
                        onChange={ (e) => this.typing(e.target.value)}
                        
                        value= {this.state.text}/> 
                    <Button onClick={() => this.setState({text: ''})}
                        theme={{main:'5%'}}
                        >CE </Button>
                </Top>
                <Keypad>
                        <div >
                            {/* <Button onClick={() => this.props.add_item(this.state.text,7) } >7</Button> */}
                            <Button onClick={()=> this.setState({text: this.state.text+'7'}) } >7</Button>
                            <Button onClick={()=> this.setState({text: this.state.text+'8'}) } >8</Button >
                            <Button onClick={()=> this.setState({text: this.state.text+'9'}) } >9</Button >
                            <Button onClick={()=> this.setState({text: this.state.text+'+'}) } >+</Button >
                        </div>
                        <div>
                            <Button onClick={()=> this.setState({text: this.state.text+'4'}) } >4</Button >
                            <Button onClick={()=> this.setState({text: this.state.text+'5'}) } >5</Button >
                            <Button onClick={()=> this.setState({text: this.state.text+'6'}) } >6</Button >
                            <Button onClick={()=> this.setState({text: this.state.text+'-'}) } >-</Button >
                        </div>
                        <div>
                            <Button onClick={()=> this.setState({text: this.state.text+'1'}) } >1</Button >
                            <Button onClick={()=> this.setState({text: this.state.text+'2'}) } >2</Button>
                            <Button onClick={()=> this.setState({text: this.state.text+'3'}) } >3</Button>
                            <Button onClick={()=> this.setState({text: this.state.text+'*'}) } >*</Button>
                        </div>
                            <Button theme={{main: "1%" , bgCl:"#f73f3f"}} onClick={()=> this.handleEqual() } >=</Button>
                            <Button theme={{main: "13%"}} onClick={()=> this.setState({text: this.state.text+'0'}) } >0</Button>
                            <Button theme={{main: "13%"}} onClick={()=> this.setState({text: this.state.text+'/'}) } >/</Button>
                        
                    </Keypad>
              </Main>
            </Fragment>
        )
    }
}


function mapStateToProps (state) {
    return{
        add_item: state,
    }
}

export default connect( mapStateToProps ,
    {add_item})(App) ; 