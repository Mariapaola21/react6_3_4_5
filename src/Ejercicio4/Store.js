/*se importa el create store para crear el store */
import { createStore } from "redux";
//se importa el reductor del contador que maneja la accion
import { countReducer } from "./Reducer";
 //se crea el store usando nuestro reductor 

 export  const store = createStore(countReducer);