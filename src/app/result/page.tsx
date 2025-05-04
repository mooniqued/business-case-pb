"use client";
import { FormContext } from "../context";
import { useContext } from "react";

export default function Result() {
  const {data} = useContext(FormContext);

  return (
    <div className="rounded-xl h-[200px] flex flex-col md:flex-row justify-around items-center p-5">
      <div className="w-full md:w-[35%] font-bold">
        <span className="text-md text-[#20858c]">Você pode receber até</span>
        <br />
        <span>R$</span>
        <span className="text-4xl text-[#20858c] pl-2">{data.value ? data.value : 0 } </span>
      </div>
      <div className="w-full md:w-[32%] text-xs/4 font-bold text-[#747073]">
        <span className="text-[#20858c]">Esta simulação traz valores aproximados.</span>
        <span> Para calcular o valor exato,</span>
        <span className="text-[#20858c]"> entre em contato com o Smile Co. a consultar seu saldo no app do FGTS.</span>
      </div>
    </div>
  );
}
  

  