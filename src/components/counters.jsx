import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const{
            onDelete,
            onIncrement,
            onDecrement,
            counters
        } =this.props;
        return ( 
                <div style={{float: "right"}}>
                    {counters.map(counter => 
                            <Counter
                                key={counter.id}
                                counter={counter}
                                onIncrement={onIncrement}
                                onDelete={onDelete}
                                onDecrement={onDecrement}
                            />
                        )}
                </div>
         );
    }
}
 
export default Counters;