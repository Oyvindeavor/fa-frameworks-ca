import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types/api/apiresponse";

export interface CartItem extends Product {
  quantity: number;
}

export interface State {
  cart: CartItem[];
  total: number;
  addToCart: (item: Product, quantity?: number) => void;
  removeItem: (id: string, quantity?: number) => void;
  clearCart: () => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      cart: [],
      total: 0,

      addToCart: (item, quantity = 1) => {
        set((state) => {
          const cart = [...state.cart];
          const existingItem = cart.find((cartItem) => cartItem.id === item.id);

          if (existingItem) {
            existingItem.quantity += quantity;
          } else {
            cart.push({ ...item, quantity });
          }

          let total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
          total = Math.round(total * 100) / 100;

          return { cart, total };
        });
      },

      removeItem: (id, quantity = 1) => {
        set((state) => {
          const cart = state.cart
            .map((cartItem) => {
              if (cartItem.id === id) {
                return { ...cartItem, quantity: cartItem.quantity - quantity };
              }
              return cartItem;
            })
            .filter((cartItem) => cartItem.quantity > 0);

          let total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
          total = Math.round(total * 100) / 100;
          return { cart, total };
        });
      },

      clearCart: () => set({ cart: [], total: 0 }),
    }),
    {
      name: "cart-storage", // Key for localStorage persistence
    },
  ),
);
