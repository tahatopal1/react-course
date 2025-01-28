import { createContext } from "react";

// This default definition is only for streamlining the auto-completion
// The actual default definition should be defined where you defined Prodiver
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});
