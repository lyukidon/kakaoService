import create from "zustand";

const useStore = create((set) => ({
    login: true,
    userName: "",
    toggleLogin: () => set((state) => ({ login: !state.login })),
    setUserName: (name) => set((state) => ({ userName: name })),
}));

export default useStore;
