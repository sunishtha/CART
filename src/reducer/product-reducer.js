export function reducerFunc(state, action) {
  switch (action.type) {
    case "SORT":
      return { ...state, sortby: action.payload };
    case "RANGE":
      return { ...state, priceRange: action.payload };
    case "ADD_TO_CART":
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1
      } else {
        const temp = { ...action.payload, quantityy: 1 }
        return { ...state, cart: [temp, ...state.cart] }
      }
      

    case "DEL_ITEM":
      const data = state.cart.filter((f) =>
        f.id !== action.payload
      )
      return { ...state, cart: data }


    default:
      return state;
  }

}