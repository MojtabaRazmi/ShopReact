import React, { Component } from 'react';
import{
    Badge,
    Button,
} from 'reactstrap'


class Counter extends Component {
    render() { 
        return ( 
            <div>
                <Badge color={this.badgeColor()} className="m-2">
                    {this.formatCount()}
                </Badge>
                <Button
                    outline color="danger"
                    className="btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    حذف    
                </Button>
                <Button 
                    outline color="warning"
                    className="btn-sm m-2"
                    onClick={() => this.props.onDecrement(this.props.counter)}
                >
                    کاهش
                </Button>
                <Button 
                    outline color="info"
                    className="btn-sm"
                    onClick={() => this.props.onIncrement(this.props.counter)}
                >
                    افزایش
                </Button>
            </div>
         )
    }
    badgeColor(){
        const {value} = this.props.counter;
        if(value > 0){
            return 'success'
        }
        else if(value===0){
            return 'warning'
        }
        return 'danger'
    }
    formatCount(){
        const {value} = this.props.counter;
        //const value = this.props.counter.value
        return value ===0 ? 'صفر' : value
    }
}
 
export default Counter;

