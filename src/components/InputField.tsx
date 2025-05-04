"use client";

export default function InputField({label = '', ...rest}) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium"> {label} </label>
            <input
                {...rest}
                className="border rounded-sm border-gray-400 h-[40px] p-2 w-auto"
            />
        </div>
    )
}