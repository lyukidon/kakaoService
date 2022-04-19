import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
    const [state, setState]=useState(
        localStorage.getItem(key) || initialValue
    );
    useEffect(()=>{
        window.localStorage.setItem(key, state);
    },[key, state])

    return [state, setState];
}

export default useLocalStorage;
