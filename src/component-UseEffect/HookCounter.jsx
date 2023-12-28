import React, { useState, useEffect } from "react";

const HookCounter = () => {
    /*  state = { number: 0, name: "" }; */

    const [number, setNumber] = useState(0);
    const [name, SetName] = useState("");

    /* la funzione dentro UseEffect viene chiamata ogni volta che il componente deve essere aggiornato perchè qualcosa è cambiato   */

    /* use effect viene triggherato ogni volta che c'è un cambiamento nella pagina, se vogliamo che use effect venga attivato solo quando cambia un valore specifico nello stato, lo dobbiamo specificare alla fine della funzione , dentro un array */
    useEffect(() => {
        console.log("update the title");
        document.title = ` hai cliccato ${number} volte `;
    }, [number]);

    return (
        <div>
            <input type="text" value={name} onChange={(event) => SetName(event.target.value)} />
            <button onClick={() => setNumber(number + 1)}> click me {number}</button>
        </div>
    );
};

export default HookCounter;
