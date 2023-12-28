import { useState } from "react";

const HookCounter2 = () => {
    const initialValue = 0;
    const [number, handleNumber] = useState(initialValue);
    return (
        <div className="d-inline-block text-center">
            <button
                onClick={() => {
                    if (number <= -5) {
                        handleNumber("mi dispiace -5 è il massimo");
                    } else {
                        handleNumber((prevCount) => prevCount - 1);
                    }
                }}
            >
                decrement
            </button>
            <button onClick={() => handleNumber((prevCount) => prevCount + 1)}>increment</button>{" "}
            <button onClick={() => handleNumber(initialValue)}>default value</button>
            <div>
                {" "}
                <h2>{number}</h2>
            </div>
        </div>
    );
};
export default HookCounter2;
