import { createContext } from "react";

export const FormContext = createContext<{
    data: {
        name: string,
        value: string
    }

    setData: (data: { name: string, value: string }) => void;
}>({
    data: {
        name: '',
        value: ''
    },
    setData: (data) => {}
})
