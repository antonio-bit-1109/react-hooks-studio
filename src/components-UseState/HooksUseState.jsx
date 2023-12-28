import { useState } from "react";
import { Button } from "react-bootstrap";

const HooksUseState = () => {
    /* USESTATE --> using a state inside a functional component */

    /* nome variabile nello stato , metodo in grado di modificare lo stato , valore */

    /*  state = {
      componentIsRunning : false
   } */
    const [number, SetComponentRun] = useState(0);
    const [color, SetChangeColor] = useState("red");
    const [shapeHeight, SetShapeHeight] = useState("50px");
    const [shapeWidth, SetWidth] = useState("50px");

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Button
                style={{ backgroundColor: color, height: shapeHeight, width: shapeWidth }}
                onMouseEnter={() => {
                    const randomNum0 = Math.floor(Math.random() * 255);
                    const randomNum1 = Math.floor(Math.random() * 255);
                    const randomNum2 = Math.floor(Math.random() * 255);
                    SetChangeColor(`rgb(${randomNum0}, ${randomNum1}, ${randomNum2})`);
                }}
                onClick={() => SetComponentRun(number + 1)}
                onMouseLeave={() => {
                    const randomNum3 = Math.floor(Math.random() * 999);
                    SetShapeHeight(`${randomNum3}px`);
                    SetWidth(`${randomNum3}px`);
                }}
            >
                {" "}
                valore --{">"} {number}
            </Button>
            <hr />
        </div>
    );
};
export default HooksUseState;
