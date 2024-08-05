import {useState} from 'react';

export default function Contador() {
    let [textoBotao, settextoBotao] = useState("Geeky and Nerdy");

    function handleClick(){
        settextoBotao(textoBotao === "Geeky and Nerdy" ? "Flirty, Freaky and Dirty" : "Geeky and Nerdy")
    }

    return(
    <>
        <button onClick={handleClick}>{textoBotao}</button>
    </>
    )
}