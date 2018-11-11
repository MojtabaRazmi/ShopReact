import React from 'react';
import './App.css';
import{
  Container,
  Button
}from 'reactstrap'
import NavBar from './components/navbar'
import Counters from './components/counters'
import { connect } from 'react-redux'
import {resetCounter} from './actions/index'

const App = ({dispatch}) => {
  return ( 
    <React.Fragment>
    <NavBar/>
      <Container>
        <div style={{float:"right"}}>
          <Counters/>
          <Button color='secondary' className='btn-sm m-2' onClick={()=>dispatch(resetCounter())}>
            RESET
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default connect()(App);
