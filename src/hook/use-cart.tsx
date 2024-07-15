import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { Product } from "@/types";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.ObjectId === data.ObjectId
        );

        if (existingItem) {
          toast("Already in the cart");
          return;
        }

        set({ items: [...get().items, data] });
        toast.success("Added to the cart");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.ObjectId !== id)] });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
