export default (state=[], action)=>{
    switch(action.type){
        case 'INCREMENT_COUNTER':
            const counters = [...state.counters];
            const index = counters.indexOf(action.entryCounter);
            counters[index] = {...action.entryCounter};
            counters[index].value++;
            this.setState({counters});
            break;

        case 'DELETE_COUNTER':
            const counters = state.counters.filter(c => c.id !== action.counterId);
            this.setState({counters});
            break;
        
        case 'DECREMENT_COUNTER' :
            const counters = [...state.counters];
            const myIndex = counters.indexOf(action.entryCounter);
            counters[myIndex]={...action.entryCounter};
            counters[myIndex].value--;
            this.setState({counters});
            break;
            
        case 'RESET_COUNTER' :
            const counters = state.counters.map((c)=>{
                c.value = 0;
                return c;
            })
            this.setState({counters})
            break;
            
        default:
            return state;
    }
}

