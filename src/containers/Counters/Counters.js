import React ,{Component} from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

class Counter extends Component {
    state = {
        counter:0
    }
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }
  render(){
      return(
        <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
        <CounterControl label="Add 5" clicked={this.props.onIncrementCounterFive} />
        <CounterControl label="Subtract 5" clicked={this.props.onDecrementCounterFive}  />
        <hr/>
        <button onClick={this.props.onStoreResults}>Store Result</button>
            <ul>
                {this.props.storedResults.map(storedResult=>(
                    <li key = {storedResult.id}onClick={ () => this.props.onDeleteResults(storedResult.id) }>{storedResult.value}</li>
                ))}
            </ul>
    </div>
      );
  }
}

const mapStateToProps = state =>{
    return {
        ctr:state.counter,
        storedResults:state.results
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type:actionTypes.DECREMENT}),
        onIncrementCounterFive: () => dispatch({type:actionTypes.INCREMENT_FIVE,value:5}),
        onDecrementCounterFive: () => dispatch({type:actionTypes.DECREMENT_FIVE,value:5}),
        onStoreResults: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResults: (id) => dispatch({type: actionTypes.DELETE_RESULT,resultEleId:id})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);