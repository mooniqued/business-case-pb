"use client";

import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormatUtils from "@/utils/format.utils";
import { useContext } from "react";
import { FormContext } from "@/app/context";
import { BALANCE } from "./enum/balance.enum";
import MaskedInputField from "@/components/MaskedInputField";

export default function Home() {
  const router = useRouter();
  const [phoneValid, setIsPhoneValid] = useState(false);
  const [phoneTouched, setIsPhoneTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data, setData } = useContext(FormContext);
  const [isFormValid, setIsFormValid] = useState(false);
  
  const [form, setForm] = useState({
    name: '',
    phone: '',
    balance: '',
    birthMonth: ''
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    const amountToReceive = calcAmount(Number(form.balance.replace(',', '.')));

    setData({
        name: form.name,
        value: FormatUtils.formatToBRL(amountToReceive)
      }
    );
    setIsLoading(false);
    router.push('/result');
  };

  const calcAmount = (balance: number) => {
    const value = BALANCE.find((v) => balance <= v.max);

    return balance * value?.percentage + value?.aditional;
  } 

  useEffect(() => {
    const emptyValue = Object.values(form).every((val) => val.trim() !== '');

    setIsFormValid(!!emptyValue && phoneValid);
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleChangeMaskedInputField = (name: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value.toString().replace(/\./g, ''),
    }));
  };

  const handleTelefoneBlur = async () => {
    const { phone } = form;
    const phoneNumber = phone.replace(/\D/g, '');

    const apiKey = process.env.NEXT_PUBLIC_PHONE_API_KEY;
    const apiUrl = process.env.NEXT_PUBLIC_PHONE_API_URL;

    const url = `${apiUrl}?api_key=${apiKey}&phone=55${phoneNumber}`;

    if (phone.trim() === '') return;
    try {
      const response = await fetch(url);
      const data = await response.json();

      setIsPhoneTouched(true);
      setIsPhoneValid(data.valid);
    } catch (error) {
      console.error('Erro ao validar número de telefone:', error);
    }
  };

  return (
    <div className="w-full">
      <form
        className="flex flex-col gap-2 w-full items-center justify-center p-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-[80%] justify-center">
          <InputField 
            label="Qual seu nome?"
            name="name"
            placeholder="ex.: Guilherme Neves"
            value={form.name}
            onChange={handleChange}
          />
          <MaskedInputField
            label="Qual seu telefone?"
            name="phone"
            type="telefone"
            value={form.phone}
            onChange={handleChangeMaskedInputField}
            onBlur={() => handleTelefoneBlur()}
            placeholder="ex.: (21) 99632-4452"
            error={!phoneValid && phoneTouched}
            errorMessage="Telefone inválido"
          />
          <MaskedInputField
            label="Qual seu saldo?"
            name="balance"
            type="moeda"
            value={form.balance}
            onChange={handleChangeMaskedInputField}
            placeholder="ex.: R$ 5.000,0"
          />
          <SelectField
            label="Qual seu mês de aniversário?"
            name="birthMonth"
            value={form.birthMonth}
            onChange={handleChange}
          />
        </div>
        <button 
          type="submit"
          disabled={isLoading || !isFormValid}
          className="bg-yellow-300 hover:bg-yellow-200 disabled:bg-yellow-200 text-white font-bold text-md rounded-sm p-2 w-[50%] cursor-pointer disabled:cursor-not-allowed"
        >
          { isLoading ? 'Aguarde...' : 'Ver Proposta' }
        </button>
      </form>
    </div>
  );
}
