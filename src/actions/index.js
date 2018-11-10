export const incrementCounter=(counter)=>({
    type : 'INCREMENT_COUNTER',
    counter
})

export const deleteCounter =(counterID)=>({
    type:'DELETE_COUNTER',
    counterID
})

export const resetCounter =()=>({
    type : 'RESET_COUNTER'
})