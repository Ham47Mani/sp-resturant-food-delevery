import { create,  } from "zustand"
import { persist } from "zustand/middleware"
import { CARTTYPE, STATEACTIONTYPES } from "./types"

// Create initial state
const Initial_State = {
  products: [],
  totalItems: 0,
  totalPrice: 0
}

export const useCartStore = create(persist<CARTTYPE & STATEACTIONTYPES>((set, get) => ({
  // Initial all value from initial state
  products: Initial_State.products,
  totalItems: Initial_State.totalItems,
  totalPrice: Initial_State.totalPrice,
  // Implementation of addToCart function
  addToCart (item) {
    const products = get().products;// Get all products
    const productInState = products.find(product => (product.id === item.id && product.optionTitle === item.optionTitle));// Check the product in the state
    if(productInState) {
      // Update products after check if there's the product before
      const updatedProducts = products.map(product => (product.id === item.id && product.optionTitle === item.optionTitle) ? 
        {
          ...item,
          quantity: product.quantity + item.quantity,
          price: product.price + item.price,
        } : item
      );
      set((state) => ({
        products: updatedProducts,
        totalItems: state.totalItems + item.quantity,
        totalPrice: state.totalPrice + item.price,
      }));
    } else {
      set((state) => ({
        products: [...state.products, item],
        totalItems: state.totalItems + item.quantity,
        totalPrice: state.totalPrice + item.price,
      }));
    }
  },
  // Implementation of removeFromCart function
  removeFromCart (item) {
    set((state) => ({
      products: state.products.filter(product => product.id !== item.id),
      totalItems: state.totalItems - item.quantity,
      totalPrice: state.totalPrice - item.price,
    }))
  }
}), {name: "cart", skipHydration: true}));