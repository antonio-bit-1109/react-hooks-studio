import React, { useState } from "react";

/* inserire degli oggetti dentro l'array vuoto di default  */

// item è un valore dello stato, handleItem è il metodo con all'interno il setstate, usestate ti consente di inizializzare il valore dello stato
/* QUANDO NELLO STATO CI SONO ARRAY, OBJECT USA LO SPRED OPERATOR PER FARE UNA COPIA DI TUTTO QUELLO CHE C'è DENTRO, PER POI CAMBIARE SOLO IL VALORE CHE VUOI TU  */

function HookCounter4() {
    const [item, setItem] = useState([]);
    const handleArray = () => setItem([...item, { pippo: item.length, paperino: Math.floor(Math.random() * 20) }]);
    console.log(item);

    return (
        <>
            <div className="d-flex justify-content-center m-5">
                <button onClick={handleArray}> cliccami</button>
            </div>
            <div className="d-flex justify-content-center">
                <ul>
                    {item.map((item) => (
                        <li key={item.pippo}> {item.paperino} </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default HookCounter4;
