import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App () {
    return (
         <div>
             <NavBar/>
             <ItemListContainer greeting ="Bienvenidos a GretiShop"/>
          </div>
    );
}

export default App;