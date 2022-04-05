import { set } from 'react-hook-form';
import create from 'zustand';

const useStore = create(()=>({
    service:[],
    category:[],
    platform:[],
    article:[],
    setState(data){
        set((state)=>({...state, ...data}))
    }
}))

export default useStore;