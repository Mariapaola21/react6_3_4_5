/*Es el estado inicial de  mi contador */

const initialState = {count:0};

/*funcion reductora */

export const countReducer = (state = initialState, action) =>{
    /*se evalua la accion */
    switch (action.type) {
        /*si la accion es incrementar aumenta  */
        case "INCREMENT":
        return {count: state.count + 1};
    /*si es decrementar disminuye*/
        case "DECREMENT":
            return {count: state.count - 1};
            /*Si es reset se inicializa el contador */
        case "RESET":
        return{count: 0};
        /*sila accion no coincide  se devuelve*/
        default:
            return state;
    }
}