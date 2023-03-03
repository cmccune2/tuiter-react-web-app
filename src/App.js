import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<Labs/>}/>
                    <Route index
                           element={<HelloWorld/>}/>
                    <Route index
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}
export default App;
