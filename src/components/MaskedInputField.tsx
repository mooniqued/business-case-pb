'use client';
import { IMaskInput } from 'react-imask';
import { IoMdCloseCircleOutline } from "react-icons/io";

type MaskedInputProps = {
  label: string;
  name: string;
  type: 'telefone' | 'cpf' | 'moeda' | 'text';
  value: string;
  onChange: (name: string, value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
  errorMessage?: string;
};

const maskConfigs = {
  telefone: '(00) 00000-0000',
  cpf: '000.000.000-00',
};

export default function MaskedInputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
  onBlur,
  error, 
  errorMessage
}: MaskedInputProps) {
  const baseClasses = className || 'border border-gray-400 rounded w-full p-2 h-[40px]';

  if (type === 'moeda') {
    return (
      
      <div className="flex flex-col">
      <label className="text-sm font-medium"> {label} </label>
      <IMaskInput
        mask={Number}
        scale={2}
        thousandsSeparator="."
        radix=","
        mapToRadix={['.']}
        normalizeZeros
        padFractionalZeros
        value={value}
        onBlur={onBlur}
        max={999999999.99}
        onAccept={(val: any) => {
          onChange(name, val);
        }}
        placeholder={placeholder || 'R$ 0,00'}
        className={baseClasses}
      />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium"> {label} </label>
      <IMaskInput
        mask={maskConfigs[type]}
        value={value}
        onBlur={onBlur}
        onAccept={(val: any) => {
          onChange(name, val);
        }}
        placeholder={placeholder}
        className={baseClasses}
      />
       {error && (
          <div className="flex items-center gap-2 text-red-700 bg-red-100 p-2 mt-1 rounded-sm text-sm font-medium">
          <IoMdCloseCircleOutline size={16} />

          {errorMessage || 'Campo inválido'}
          </div>
      )}
    </div>
  );
}
