"use client";

import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    router.push('/result');
  };

  const [form, setForm] = useState({
    name: '',
    phone: '',
    balance: '',
    birthMonth: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const validarTelefone = (value) => {
    // Formato: (99) 99999-9999 ou (99) 9999-9999
    const regex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
    return regex.test(value);
  };

  const handleTelefoneBlur = () => {
    const { phone } = form;
    if (phone.trim() === '') return; // não valida campo vazio
    console.log('blur');

    if (!validarTelefone(phone)) {
      alert('Telefone inválido. Use (99) 99999-9999');
    } else {
      console.log('Telefone válido');
      }
  };
  return (
    <div className="w-full">
      <form className="flex flex-col gap-2 w-full items-center justify-center p-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-2 p-4 w-full justify-center">
          <InputField 
            label="Qual seu nome?"
            name="name"
            placeholder="ex.: Guilherme Neves"
            value={form.name}
            onChange={handleChange}
          />
          <InputField 
            label="Qual seu telefone?"
            name="phone"
            placeholder="ex.: (21) 98765-9057"
            onBlur={handleTelefoneBlur} 
            value={form.phone}
            onChange={handleChange}
          /> 
          <InputField label="Qual seu saldo?" name="balance" placeholder="ex.: R$ 5.000,00" value={form.balance} onChange={handleChange}  />
          <SelectField label="Qual seu mês de aniversário?" name="birthMonth" value={form.birthMonth} onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="pointer bg-yellow-300 hover:bg-yellow-200 text-white font-bold text-md rounded-sm p-2 w-[50%]"
        >
          Ver Proposta
        </button>
      </form>
    </div>
  );
}
