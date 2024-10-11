export default function Input({placeholder, id, onChange, type}: any) {
    if(type === "light") {
        return (
            <input className="bg-white text-black border-none p-2 m-3 rounded-2xl overflow-hidden font-sans font-bold text-3xl" type="text" id={id} onChange={onChange} placeholder={placeholder} />
        );
    } else if(type === "dark") {
        return (
            <input className="bg-slate-800 text-white border-none p-2 m-3 rounded-2xl overflow-hidden font-sans font-bold text-3xl" type="text" id={id} onChange={onChange} placeholder={placeholder} />
        );
    }
}