import create from "zustand";

const useStore = create((set) => ({
    login: true,
    toggleLogin: () => set((state) => ({ login: !state.login })),
}));

export default useStore;
