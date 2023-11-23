//defining constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

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

const addUser=()=>{
    return {
        type: ADD_USER,
        payload:{name: 'towsif'},
    }

};
//1. State
//2. dispatch action
//3. reducer-->based on action type
//4.update


