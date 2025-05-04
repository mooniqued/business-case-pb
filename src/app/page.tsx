"use client";

import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsButtonDisabled(true);
    setIsLoading(true);
    
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // router.push('/result');
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

  const handleTelefoneBlur = async () => {
    const { phone } = form;
    const apiKey = process.env.REACT_APP_PHONE_API_KEY;
    const apiUrl = process.env.REACT_APP_PHONE_API_URL;
    const url = `apiUrl?apiKey=${apiKey}&phone=${phone}`;

    debugger;
    if (phone.trim() === '') return;
    try {
      const response = await fetch(url);
      const data = await response.json();
    } catch (error) {
      console.error('Erro ao validar número de telefone:', error);
    } finally {
      console.log('acabou')
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
          disabled={isLoading}
          className="bg-yellow-300 hover:bg-yellow-200 disabled:bg-yellow-200 text-white font-bold text-md rounded-sm p-2 w-[50%] cursor-pointer disabled:cursor-not-allowed"
        >
          { isLoading ? 'Aguarde...' : 'Ver Proposta' }
        </button>
      </form>
    </div>
  );
}
