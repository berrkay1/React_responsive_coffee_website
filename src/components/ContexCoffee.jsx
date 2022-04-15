import { createContext } from "react";
import { data } from "../MenuData";
import { useState } from "react";

 const ContextCoffeeApi = createContext();

    export  const ContexProvider = ({children}) =>{ 


        const [state,setState] = useState({
            menuData:data,
            sepet:[]
          });
          
        
        
          
          const AddtoBasket = (coffe) => setState({
            ...state,
            sepet: state.sepet.find(coffeItem => coffeItem.id === coffe.id) ? state.sepet.map(coffeItem => coffeItem.id === coffe.id ? {...coffeItem ,count:coffeItem.count +1 } : coffeItem  )
            : [...state.sepet, {...coffe, count:1}] 
          });
        
          const sepet = state.sepet;
          const menuData = state.menuData;

        return(
            <ContextCoffeeApi.Provider
             value={{
                sepet,
                menuData,
                AddtoBasket,
            }}>
                {children}
            </ContextCoffeeApi.Provider>
        )

    }


 export default ContextCoffeeApi;

