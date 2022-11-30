import Labs from "./labs/index.js";
import HelloWorld from "./labs/a6/hello-world.js";
import Tuiter from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>

                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                    <Route path="/*" element={<Labs/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;