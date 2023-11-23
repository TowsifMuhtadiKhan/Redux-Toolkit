//Prcess of Redux
//-----------------------------

//1. State
//2. dispatch action
//3. reducer-->based on action type
//4. store -->hold state-->getState(),dispatch(), subscribe()

//-----------------------------
const {createStore} = require("redux");

//defining constant its a good practice and will help to avoide typos
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
// const ADD_USER = 'ADD_USER';

//state
const initialCounterState={
    count:0
}
const initialUsersState={
    users: [{name:"anisul islam"}],
}

//action-object-(type,playload)

const incrementCounter=()=>{
    return {
        type: INCREMENT,
    }
};

const deccrementCounter=()=>{
    return {
        type: DECREMENT,
    }
};

// create reducer for counter 
// reducer is a pure function because it will definitely take input and return output
//reducer will handle the logic and update state based on action's type

const counterReducer=(state=initialCounterState, action)=>{
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
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(deccrementCounter());






// const addUser=()=>{
//     return {
//         type: ADD_USER,
//         payload:{name: 'towsif'},
//     }
// };



