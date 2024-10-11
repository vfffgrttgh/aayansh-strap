function Outline({text, id, onClick, type}: any) {
    if(type === "blue") {
        return (
            <button onClick={onClick} className="bg-white text-black p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-sky-500" id={id} style={{transition: "1s background-color", border: "3px solid black"}}>{text}</button>
        );
    } else if(type === "red") {
        return (
            <button onClick={onClick} className="bg-white text-black p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-red-400" id={id} style={{transition: "1s background-color", border: "3px solid black"}}>{text}</button>
        );
    } else if(type === "green") {
        return (
            <button onClick={onClick} className="bg-white text-black p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-lime-400" id={id} style={{transition: "1s background-color", border: "3px solid black"}}>{text}</button>
        );
    } else if(type === "purple") {
        return (
            <button onClick={onClick} className="bg-white text-black p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-purple-400" id={id} style={{transition: "1s background-color", border: "3px solid black"}}>{text}</button>
        );
    } else if(type === "yellow") {
        return (
            <button onClick={onClick} className="bg-white text-black p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-yellow-400" id={id} style={{transition: "1s background-color", border: "3px solid black"}}>{text}</button>
        );
    } else if(type === "dark") {
        return (
            <button onClick={onClick} className="bg-slate-800 text-white p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-slate-600" id={id} style={{transition: "1s background-color", border: "3px solid white"}}>{text}</button>
        );
    }
}

export default Outline;