import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

function App () {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route exact path="/" element={<Welcome/>}/>
            <Route exact path="/catalogue" element={<ItemListContainer/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;