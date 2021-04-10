var cartInit = {
    
    cartelem: [],
  };
  
  const cartReducer = (state = cartInit, action) => {
    switch (action.type) {
      case "addProduct":
        return {  cartelem: [...state.cartelem,action.payload] };
  
      case "removeProduct":
        return { cartelem: [...cartelem.filter(el => el.id != action.payload)] };
      default:
        return Init;
    }
  };
  export default cartReducer;
  