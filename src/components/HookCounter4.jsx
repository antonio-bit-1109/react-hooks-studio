import React, { useState } from "react";

/* inserire degli oggetti dentro l'array vuoto di default  */

// item è un valore dello stato, handleItem è il metodo con all'interno il setstate, usestate ti consente di inizializzare il valore dello stato
function HookCounter4() {
    const [item, setItem] = useState([]);
    const handleArray = () => setItem([...item, { id: item.length, value: Math.floor(Math.random() * 20) }]);
    console.log(item);

    return (
        <div className="d-flex justify-content-center m-5">
            <button onClick={handleArray}> cliccami</button>
        </div>
    );
}

export default HookCounter4;
