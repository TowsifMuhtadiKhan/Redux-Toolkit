//productReducer
const {createStore, combineReducers} = require("redux");

//Products Constants
const GET_PRODUCTS ="GET_PRODUCTS";
const ADD_PRODUCT ="ADD_PRODUCT";

//Cart Constants
const GET_CART_ITEMS ="GET_CART_ITEMS";
const ADD_CART_ITEM ="ADD_CART_ITEM";


//Product States
const initalProductState={
    products: ["sugar", "salt"],
    numberofProducts: 2,
};

//Cart States
const initalCartState={
    cart: ["sugar"],
    numberofProducts: 1,
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

//Cart Action
const getCart = () =>{
    return{
        type :GET_CART_ITEMS,
    };
};
const addCart = (product) =>{
    return{
        type :ADD_CART_ITEM,
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

//Cart reducer

const cartReducer = (state=initalCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return{
                ...state,
            };
        case ADD_CART_ITEM:
            return{
                cart: [...state.cart, action.payload],
                numberofProducts : state.numberofProducts + 1,
            };
        default:
            return state;
    }
};

//Product store
// const store = createStore(productReducer);
// store.subscribe(()=>{
//     console.log(store.getState());
// });


const rootReducer = combineReducers({
    productR: productReducer,
    cartR : cartReducer,

});

//Cart store
const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("pen"));

store.dispatch(getCart());
store.dispatch(addCart("pen"));
//cartReducer