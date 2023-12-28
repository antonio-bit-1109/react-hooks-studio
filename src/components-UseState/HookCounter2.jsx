import { useState } from "react";

/* SE IL NUOVO VALORE DELLO STATO DIPENDE DAL PRECENDETE VALORE, PUOI PASSARE UN ALTRA FUNZIONE AL SETNUMBER E USARE UN PARAMETRO COME RIFERIMENTO DEL VALORE PRECEDENTE  */

const HookCounter2 = () => {
    const initialValue = 0;
    const [number, SetNumber] = useState(initialValue);
    return (
        <div className="d-inline-block text-center">
            <button
                onClick={() => {
                    if (number <= -5) {
                        SetNumber("mi dispiace -5 è il massimo");
                    } else {
                        SetNumber((prevCount) => prevCount - 1);
                    }
                }}
            >
                decrement
            </button>
            <button onClick={() => SetNumber((prevCount) => prevCount + 1)}>increment</button>{" "}
            <button onClick={() => SetNumber(initialValue)}>default value</button>
            <div>
                {" "}
                <h2>{number}</h2>
            </div>
        </div>
    );
};
export default HookCounter2;
