import {useState} from "react";

function useLocalStorage (key, initial="") {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
    	//
        return item ? JSON.parse(item) : initial;

        // if (JSON.parse(item)) {
        //     return JSON.parse(item) 
        // } else {
        //     window.localStorage.setItem(key, JSON.stringify(initial));
        //     return initial
        // }
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue]
};

export default useLocalStorage;