import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

function App () {
    return (
         <div>
             <NavBar/>
             <CartWidget/>
             <ItemListContainer Bienvenido={"Bienvenido a GretiShop"}/>
          </div>
    );
}

export default App;