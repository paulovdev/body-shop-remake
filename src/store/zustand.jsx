"use client";
import { create } from "zustand";

export const useLayoutStore = create((set) => ({
  layoutMode: "cascate",
  setLayoutMode: (mode) => set({ layoutMode: mode }),
  toggleLayoutMode: () =>
    set((state) => ({
      layoutMode: state.layoutMode === "grid" ? "cascate" : "grid",
    })),
}));

export const useFilterStore = create((set) => ({
  isFilterOpen: false,
  openFilter: () => set({ isFilterOpen: true }),
  closeFilter: () => set({ isFilterOpen: false }),
}));

export const useOrderStore = create((set) => ({
  order: "date",
  setOrder: (order) => set({ order }),
}));
