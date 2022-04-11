import create from "zustand";

const useStore = create((set) => ({
    login: false,
    num: 0,
    setNum: () => set((state) => ({ num: state.num + 1 })),
    setLogin: () => set((state) => ({ login: true })),
    setLogout: () => set((state) => ({ login: false })),
}));

export default useStore;
