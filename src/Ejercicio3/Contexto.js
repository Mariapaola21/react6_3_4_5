// import React, {createContext, useState} from "react";  /*importamos el context junto a los estados */ 

// const Themecontext = createContext ("claro"); /*Valor inicial para crear el contexto */

//  export const ThemeProvider = ({children})=>{ /* exportamos Thema provincional se le pasa las propiedades hijos que seran las que tendran acceso */

//     const [Theme, setTheme] = useState("claro");  /** se setea el tema  y se le da un valor */
//     const ToggleTheme = ()=>{  /* Se coloca la logica  que hara */ 
//         setTheme (Theme === "claro" ? "oscuro" : "claro") /*el tema es igual a claro si no pasara a oscuro y de oscuro a claro */
//     };

//     return(  /*value es el valor que se le dara al contexto que solo los hijos podran tener acceso a ella*/
//         <Themecontext.Provider 
//         value= {{Theme, ToggleTheme}}>   
//             {children}

//         </Themecontext.Provider>
//     );
// };

// export default Themecontext;
