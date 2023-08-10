// Imports 
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div>
      {/* NavBar */}

      <NavBar/>

      {/* ItemListContainer */}

      <ItemListContainer greeting={"ESTE ES EL ItemListContainer CON EL PROP"}/>
    </div>
   
  )
}

export default App
