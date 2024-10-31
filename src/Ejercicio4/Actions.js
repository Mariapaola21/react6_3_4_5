/* se crea una accion para aumentar*/ 
export const increment =()=>{
    /*se retorna un objeto con el tipo de accion */
return {type: "INCREMENT"};

};

export const decrement =()=>{
return {type: "DECREMENT"};
};

/*Se resetea */

export const reset =()=>{
 return{type: "RESET"}
}