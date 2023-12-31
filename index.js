//Prcess of Redux
//-----------------------------

//1. State- for this project count:0 
//2. dispatch action -increment,decrement, reser
//3. reducer-->based on action type
//4. store -->hold state-->getState(),dispatch(), subscribe()

//-----------------------------
const {createStore} = require("redux");

//defining constant its a good practice and will help to avoide typos
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';


//state
const initialState={
    count:1,
};

//action-object-(type,playload)


const incrementCounterAction=()=>{
    return {
        type: INCREMENT,
    }
};
const decrementCounterAction=()=>{
    return {
        type: DECREMENT,
    }
};
const resetCounterAction=()=>{
    return {
        type: RESET,
    }
};
const incrementCounterByValue=(value)=>{
    return {
        type: INCREMENT_BY_VALUE,
        payload: value //playeload to receive the data

    }
};

// create reducer for counter 
// reducer is a pure function because it will definitely take input and return output
//reducer will handle the logic and update state based on action's type

const counterReducer=(state=initialState, action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,//means rest of the property will be here if it has and only change the count
                count: state.count +1,
            }
        case DECREMENT:
            return {
                ...state,//means rest of the property will be here if it has and only change the count
                count: state.count -1,
            }
        case RESET:
            return {
                ...state,//means rest of the property will be here if it has and only change the count
                count: 0,
                }
        case INCREMENT_BY_VALUE:
            return {
                ...state,//means rest of the property will be here if it has and only change the count
                count: state.count + action.payload,
                }
        default:
            state;
    }
}
//create store
const store=createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch action
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterByValue(5));








