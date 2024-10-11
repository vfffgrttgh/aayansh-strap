function Button({text, id, onClick, type}: any) {
    if(type === "blue") {
        return (
            <button onClick={onClick} className="bg-blue-500 text-white p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-blue-800" id={id} style={{transition: "1s background-color"}}>{text}</button>
        );
    } else if(type === "red") {
        return (
            <button onClick={onClick} className="bg-red-500 text-white p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-red-800" id={id} style={{transition: "1s background-color"}}>{text}</button>
        );
    } else if(type === "green") {
        return (
            <button onClick={onClick} className="bg-green-500 text-white p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-green-800" id={id} style={{transition: "1s background-color"}}>{text}</button>
        );
    } else if(type === "purple") {
        return (
            <button onClick={onClick} className="bg-purple-500 text-white p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-purple-800" id={id} style={{transition: "1s background-color"}}>{text}</button>
        );
    } else if(type === "yellow") {
        return (
            <button onClick={onClick} className="bg-yellow-500 text-white p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-yellow-800" id={id} style={{transition: "1s background-color"}}>{text}</button>
        );
    } else if(type === "dark") {
        return (
            <button onClick={onClick} className="bg-slate-700 text-white p-3 m-3 border-none font-sans font-semibold rounded-2xl hover:bg-slate-900" id={id} style={{transition: "1s background-color"}}>{text}</button>
        );
    }
}

export default Button;