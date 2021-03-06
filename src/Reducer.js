/*export const initialState ={
    cart:[],
};
// Selector
export const getCartTotal = (cart)=>
cart?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart, action.item],
            };
            case 'REMOVE_FROM_CART':
                const index= state.cart.findIndex(
                    (cartItem) => cartItem.id === action.id
                );
                let newCart = [...state.cart];
                if(index >= 0){
                     newCart.splice(index, 1);   // here splice means = returns an array of elements that have been removed from the array
                } else{
                    console.warn(
                        `can remove product (id: ${action.id} as its not in cart!`
                    )
                }
                return{
                    ...state,
                    cart:newCart
                }
            default:
                return state;
    }
}
export default reducer;*/