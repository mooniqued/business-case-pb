"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="">
      Ooops! Página não encontrada
        <br />
      <button className="bg-yellow-300 hover:bg-yellow-200 text-white font-bold text-md rounded-sm p-2 w-[50%] cursor-pointer" onClick={() => router.push('/')} > Voltar para o início</button>
    </div>
  );
}
