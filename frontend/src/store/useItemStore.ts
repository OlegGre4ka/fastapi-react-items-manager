import { create } from 'zustand';

// Global interface for our data
export interface ItemData {
  name: string;
  price: number;
  description?: string;
}

interface ItemState {
  items: ItemData[];
  addItem: (newItem: ItemData) => void;
  setItems: (items: ItemData[]) => void;
}

export const useItemStore = create<ItemState>((set) => ({
  items: [],
  
  // Action to add a single item
  addItem: (newItem) => set((state) => ({ 
    items: [...state.items, newItem] 
  })),

  // Action to replace the whole list (useful for GET requests later)
  setItems: (items) => set({ items }),
}));