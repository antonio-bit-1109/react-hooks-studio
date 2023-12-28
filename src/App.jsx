import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HooksUseState from "./components/HooksUseState";
import HookCounter2 from "./components/HookCounter2";
import StateHook3 from "./components/StateHook3";
import HookCounter4 from "./components/HookCounter4";

function App() {
    return (
        <div className="App">
            <HooksUseState />
            <HookCounter2 />
            <StateHook3 />
            <HookCounter4 />{" "}
        </div>
    );
}

export default App;
