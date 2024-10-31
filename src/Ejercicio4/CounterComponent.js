/*importamos react y los hooks de redux */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

/*importamos las acciones */

import { increment, decrement, reset } from "./Actions";

const CounterComponent=()=>{
/*useSelector selecciona el estado count del store de redux */

const count = useSelector((state)=> state.count);
/*useDispatchenvia acciones al store */

const dispatch = useDispatch ();

return(
    <div>
        <h1>Contador: {count}</h1>
        <button onClick={()=> dispatch(increment())}>incrementar</button>
        <button onClick={() => dispatch (decrement())}>decrementar</button>
        <button onClick={()=> dispatch (reset())}>restablecer</button>
    </div>
);
}
export default CounterComponent;