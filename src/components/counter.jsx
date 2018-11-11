import React from 'react';
import{
    Badge,
    Button,
} from 'reactstrap'
import {connect} from 'react-redux';
import {decrementCounter , incrementCounter , deleteCounter} from '../actions/index';

const Counter = ({dispatch , counter}) => {
    return ( 
        <div>
            <Badge color={badgeColor(counter)} className="m-2">
                {formatCount(counter)}
            </Badge>
            <Button
                outline color="danger"
                className="btn-sm m-2"
                onClick={() => dispatch(deleteCounter(counter.id))}
            >
                حذف    
            </Button>
            <Button 
                outline color="warning"
                className="btn-sm m-2"
                onClick={() => dispatch(decrementCounter(counter))}
            >
                کاهش
            </Button>
            <Button 
                outline color="info"
                className="btn-sm"
                onClick={() => dispatch(incrementCounter(counter))}
            >
                افزایش
            </Button>
        </div>
    );
}

    const badgeColor=(counter)=>{
        const {value} = counter;
        if(value > 0){
            return 'success'
        }
        else if(value===0){
            return 'warning'
        }
        return 'danger'
    }
    const formatCount=(counter)=>{
        const {value} = counter;
        //const value = this.props.counter.value
        return value ===0 ? 'صفر' : value
    }

export default connect(state=>{
    return{
        state
    }
})(Counter);

