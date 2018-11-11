export default (state=[], action)=>{
    switch(action.type){
        case 'INCREMENT_COUNTER':
            const iCounters = [...state];
            const index = iCounters.indexOf(action.entryCounter);
            iCounters[index] = {...action.entryCounter};
            iCounters[index].value++;
            return [...iCounters];
            

        case 'DELETE_COUNTER':
            const filtredCounters = state.filter(c => c.id !== action.counterID);
            return [...filtredCounters];
        
        
        case 'DECREMENT_COUNTER' :
            const dCounters = [...state];
            const myIndex = dCounters.indexOf(action.entryCounter);console.log(dCounters)
            dCounters[myIndex]={...action.entryCounter};
            dCounters[myIndex].value--;
            return[...dCounters]
            
            
        case 'RESET_COUNTER' :
            const resetCounters = state.map((c)=>{
                c.value = 0;
                return c;
            })
            return [...resetCounters]
            
        default:
            return state;
    }
}

