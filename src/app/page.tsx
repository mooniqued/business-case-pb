import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";

export default function Home() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // Aqui você pode fazer o que quiser com os dados, como enviar para uma API
  }

  return (
    <div className="w-full">
      <form className="flex flex-col gap-2 w-full items-center justify-center p-4" action="handleSubmit">
        <div className="flex flex-wrap gap-2 p-4 w-full justify-center">
          <InputField label="Qual seu nome?" name="name" placeholder="ex.: Guilherme Neves"  />
          <InputField label="Qual seu telefone?" name="phone" placeholder="ex.: (21) 98765-9057" />
          <InputField label="Qual seu saldo?" name="balance" placeholder="ex.: R$ 5.000,00" />
          <SelectField label="Qual seu mês de aniversário?" name="birthday" />
        </div>
        <button type="submit" className="bg-yellow-300 hover:bg-yellow-200 text-white font-bold text-md rounded-sm p-2 w-[50%] cursor-pointer"> Ver Proposta </button>
      </form>
    </div>
  );
}
