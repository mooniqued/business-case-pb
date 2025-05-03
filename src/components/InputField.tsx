interface InputFieldProps {
    label?: string;
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function InputField( {
    label = '',
    type = "text",
    name = '',
    value = '',
    placeholder = '',
    onChange}: InputFieldProps) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium"> {label} </label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="border rounded-sm border-gray-400 h-[40px] p-2 w-auto"
            />
        </div>
    )
}