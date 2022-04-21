import { createContext } from "react";
import { data } from "../MenuData";
import { useState } from "react";

 const ContextCoffeeApi = createContext();

    export  const ContexProvider = ({children}) =>{ 


        const [state,setState] = useState({
            menuData:data,
            sepet:[]
          });
          
          const artir = (coffeId) => setState({
            ...state,
            sepet: state.sepet.map(item => item.id ===coffeId ? {...item,count:item.count +1}:item )
          })
        
        const azalt = (coffeId) => setState({
          ...state,
          sepet:state.sepet.map(item => item.id === coffeId ?  {...item,count:item.count > 1 ? item.count -1:item.count} :item  )
        })

        const deleteItem = (coffeId) => setState({
          ...state,
          sepet:state.sepet.filter(item=>item.id !==coffeId)
          
        })
          
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
                artir,
                azalt,
                deleteItem
            }}>
                {children}
            </ContextCoffeeApi.Provider>
        )

    }


 export default ContextCoffeeApi;

