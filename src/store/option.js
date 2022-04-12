import create from "zustand";

const useStore = () =>
    create((set) => ({
        service: [],
        category: [],
        platform: [],
        article: [],
        setData: (obj) => set((state) => ({ ...state, ...obj })),
    }));

export default useStore;
