//productReducer
const {createStore, applyMiddleware} = require("redux");
const {default: logger} =require("redux-logger");


//Products Constants
const GET_PRODUCTS ="GET_PRODUCTS";
const ADD_PRODUCT ="ADD_PRODUCT";


//Product States
const initalProductState={
    products: ["sugar", "salt"],
    numberofProducts: 2,
};

//Product Action
const getProducts = () =>{
    return{
        type :GET_PRODUCTS,
    };
};
const addProducts = (product) =>{
    return{
        type :ADD_PRODUCT,
        payload: product,
    };
};

//product reducer
const productReducer = (state=initalProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
            };
        case ADD_PRODUCT:
            return{
                products: [...state.products, action.payload],
                numberofProducts : state.numberofProducts + 1,
            };
          
    
        default:
            return state;
    }
};



//Product store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(()=>{
    console.log(store.getState());
});



store.dispatch(getProducts());
store.dispatch(addProducts("pen"));
