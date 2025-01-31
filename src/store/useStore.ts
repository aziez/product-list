// store/useStore.ts
import { create } from "zustand";

interface Product {
  name: string;
  price: number;
  quantity: number;
  image: any;
}

interface StoreState {
  products: Product[];
  cart: Product[];
  addToCart: (product: Product) => void;
  increaseCart: (product: Product) => void;
  setProducts: (products: Product[]) => void;
  removeCart: (product: Product) => void;
}

const useStore = create<StoreState>((set) => ({
  products: [],
  cart: [],
  setProducts: (products) => set({ products }),

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.name === product.name
      );
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  increaseCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.name === product.name
      );
      if (existingProduct && existingProduct.quantity > 1) {
        return {
          cart: state.cart.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
      // Remove item if quantity reaches zero
      return {
        cart: state.cart.filter((item) => item.name !== product.name),
      };
    }),

  removeCart: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== product.name),
    })),
}));

export default useStore;
