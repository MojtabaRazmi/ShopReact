const incrementCounter=(counter)=>({
    type : 'INCREMENT_COUNTER',
    counter
})

const deleteCounter =(counterID)=>({
    type:'DELETE_COUNTER',
    counterID
})

const resetCounter =()=>({
    type : 'RESET_COUNTER'
})