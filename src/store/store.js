import create from "zustand";

const useStore = create((set) => ({
    login: false,
    toggleLogin: () => set((state) => ({ login: !state.login })),
}));

export default useStore;
