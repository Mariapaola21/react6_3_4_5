import React from "react";
import { Provider } from "react-redux";
import { store } from "./Ejercicio4/Store";
import CounterComponent from "./Ejercicio4/CounterComponent";
// import { ThemeProvider } from "./Ejercicio3/Contexto";
// import ThemeToggle from "./Ejercicio3/Cambio";
// import Texto from "./Ejercicio3/texto";

// function App() { /*ejercicio 3 */
//   return (
//     <ThemeProvider>
//       <ThemeToggle />
//       <Texto/>
//     </ThemeProvider>
//   );
// }

// export default App

/*ejercicio numero 4 */
const App =()=>{
  return(
    <Provider store={store}>
      <div className="App"> 
        <h1>Mi contador con Redux</h1>
        <CounterComponent/>
      </div>
    </Provider>
  );
}
export default App;