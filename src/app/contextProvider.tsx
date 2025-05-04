"use client";

import { useState } from "react";
import { FormContext } from "./context";

export function FormProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState({
        name: "",
        value: ""
    });

    return (
        <FormContext.Provider value={{ data, setData }}>
            {children}
        </FormContext.Provider>
    );
}
