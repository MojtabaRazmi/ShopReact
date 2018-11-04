import React, { Component } from 'react';
import './App.css';
import{
  Container,
  Button
}from 'reactstrap'
import NavBar from './components/navbar'
import Counters from './components/counters'
class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
        counters : [
            {id: 1,value: 0},
            {id: 2,value: 0},
            {id: 3,value: 0},
            {id: 4,value: 0},
            {id: 5,value: 0}
        ]
     }
     this.handleIncrement=this.handleIncrement.bind(this)
     this.handleDelete = this.handleDelete.bind(this)
     this.handleDecrement =this.handleDecrement.bind(this)
     this.handleReset =this.handleReset.bind(this);
  }

  handleIncrement(entryCounter){
      const counters = [...this.state.counters];
      const index = counters.indexOf(entryCounter);
      counters[index] = {...entryCounter};
      counters[index].value++;
      this.setState({counters});
  }

  handleDelete(counterId){
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  }

  handleDecrement(entryCounter){
      const counters = [...this.state.counters];
      const myIndex = counters.indexOf(entryCounter);
      counters[myIndex]={...entryCounter};
      counters[myIndex].value--;
      this.setState({counters});
  }

  handleReset(){
     const counters = this.state.counters.map((c)=>{
       c.value = 0;
       return c;
     })
     this.setState({counters})
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value >0).length}/>
        <Container>
          <div style={{float:"right"}}>
            <Counters
              counters={this.state.counters}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              onDecrement={this.handleDecrement}
            />
            <Button color='secondary' className='btn-sm m-2' onClick={this.handleReset}>
              RESET
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
