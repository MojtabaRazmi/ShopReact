import React, { Component } from 'react';
import{
    Badge,
    Button,
} from 'reactstrap'


class Counter extends Component {
    render() { 
        return ( 
            <div>
                <Badge color="info" className="m-2">
                    {this.formatCount()}
                </Badge>
                <Button
                    color="danger"
                    className="btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    حذف    
                </Button>
                <Button 
                    color="warning"
                    className="btn-sm m-2"
                    onClick={() => this.props.onDecrement(this.props.counter)}
                >
                    کاهش
                </Button>
                <Button 
                    color="primary"
                    className="btn-sm"
                    onClick={() => this.props.onIncrement(this.props.counter)}
                >
                    افزایش
                </Button>
            </div>

         )
    }
    formatCount(){
        const {value} = this.props.counter;
        return value ===0 ? 'صفر' : value
    }
}
 
export default Counter;

