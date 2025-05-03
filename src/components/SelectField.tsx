const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  
  export default function SelectField({ label ='', name='', value='' }) {
    return (
      <div className="flex flex-col">
        <label className="text-sm">{label}</label>
        <select
          name={name}
          value={value}
          className="border rounded-sm border-gray-400 h-[40px] p-2"
        >
          <option value="" disabled>Selecione...</option>
          {months.map((month, id) => (
            <option key={id} value={id}>{month}</option>
          ))}
        </select>
      </div>
    );
  }