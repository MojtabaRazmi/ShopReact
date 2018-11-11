export const incrementCounter=(entryCounter)=>({
    type : 'INCREMENT_COUNTER',
    entryCounter
})

export const decrementCounter =(entryCounter)=>({
    type : 'DECREMENT_COUNTER',
    entryCounter
})

export const deleteCounter =(counterID)=>({
    type:'DELETE_COUNTER',
    counterID
})

export const resetCounter =()=>({
    type : 'RESET_COUNTER'
})