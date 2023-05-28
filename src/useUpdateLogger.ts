import {useEffect} from "react";

export default function useUpdateLogger(value: string) {
    useEffect(() => {
        if (value.length > 5) {
            console.log('Value changed: ', value);
        }
    }, [value]);
};
