import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HooksUseState from "./components/HooksUseState";
import HookCounter2 from "./components/HookCounter2";
import StateHook3 from "./components/StateHook3";

function App() {
    return (
        <div className="App">
            <HooksUseState />
            <HookCounter2 />

            <StateHook3 />
        </div>
    );
}

export default App;
