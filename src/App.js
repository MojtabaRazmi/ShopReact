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

     this.handleIncrement=this.handleIncrement.bind(this)
     this.handleDelete = this.handleDelete.bind(this)
     this.handleDecrement =this.handleDecrement.bind(this)
     this.handleReset =this.handleReset.bind(this);
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
