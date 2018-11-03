import React, { Component } from 'react';
import Counter from './counter';
import {
    Button,
    Container
} from 'reactstrap';

class Counters extends Component {
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

    render() { 
        return ( 
            <Container>
                <div style={{float: "right"}}>
                    {this.state.counters.map(counter => 
                            <Counter
                                key={counter.id}
                                counter={counter}
                                onIncrement={this.handleIncrement}
                                onDelete={this.handleDelete}
                                onDecrement={this.handleDecrement}
                            />
                        )}
                </div>
            </Container>
         );
    }
}
 
export default Counters;