import {useEffect, useState} from "react";

function getSavedValue(key: string, initialValue: any) {
    const item = localStorage.getItem(key);
    if (item === null) {
        return initialValue;
    }

    const savedValue = JSON.parse(item);
    if (savedValue) {
        return savedValue;
    }

    if (initialValue instanceof Function) {
        return initialValue();
    }

    return initialValue;
}

export default function useLocalStorage(key: string, initialValue: string) {
    const [value, setValue] = useState(() => (getSavedValue(key, initialValue)));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};
