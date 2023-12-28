import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HooksUseState from "./components-UseState/HooksUseState";
import HookCounter2 from "./components-UseState/HookCounter2";
import StateHook3 from "./components-UseState/StateHook3";
import HookCounter4 from "./components-UseState/HookCounter4";
import HookCounter from "./component-UseEffect/HookCounter";

function App() {
    return (
        <div className="App">
            <HooksUseState />
            <HookCounter2 />
            <StateHook3 />
            <HookCounter4 />
            <hr />
            <HookCounter />
        </div>
    );
}

export default App;
