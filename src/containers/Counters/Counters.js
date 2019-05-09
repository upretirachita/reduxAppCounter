import React ,{Component} from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import * as actionTypes from '../../store/actions/actions'
import * as actionCreator from '../../store/actions/index';

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
        <button onClick={()=> this.props.onStoreResults(this.props.ctr)}>Store Result</button>
            <ul>
                {this.props.storedResults.map(storedResult=>(
                    <li key = {storedResult.id}onClick={ () => this.props.onDeleteResults(storedResult.id) }>Result from Current  Counter:{storedResult.value}</li>
                ))}
            </ul>
    </div>
      );
  }
}

const mapStateToProps = state =>{
    return {
        ctr:state.countRed.counter, //state.countRed name is taken from index.js for reducer comine
        storedResults:state.resRed.results
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch(actionCreator.increment()),
        onDecrementCounter: () => dispatch(actionCreator.decrement()),
        onIncrementCounterFive: () => dispatch(actionCreator.incrementFive(5)),
        onDecrementCounterFive: () => dispatch(actionCreator.decrementFive(5)),
        onStoreResults: (result) => dispatch(actionCreator.storeResult(result)),
        onDeleteResults: (id) => dispatch(actionCreator.deleteResult(id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);