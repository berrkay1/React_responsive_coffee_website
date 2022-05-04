import { createContext } from "react";
import { data } from "../MenuData";
import { useState } from "react";
import {ProductsData} from '../ProductsData';


 const ContextCoffeeApi = createContext();

    export  const ContexProvider = ({children}) =>{ 


        const [state,setState] = useState({
            menuData:data,
            ProductData:ProductsData,
            sepet:[]
          });

        const [input,setInput] = useState('');

        
          
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

          const FromProductaddToBasket = (product) => setState({
            ...state,
            sepet:state.sepet.find(item => item.id ===product.id ) ? state.sepet.map(item => item.id === product.id ? {...item,count:item.count +1} : item) : [...state.sepet, {...product,count:1}]
          });


          
        
          const sepet = state.sepet;
          const menuData = state.menuData;
          const ProductData = state.ProductData;

        return(
            <ContextCoffeeApi.Provider
             value={{
                sepet,
                menuData,
                AddtoBasket,
                FromProductaddToBasket,
                ProductData,
                artir,
                azalt,
                deleteItem,input,setInput
            }}>
                {children}
            </ContextCoffeeApi.Provider>
        )

    }


 export default ContextCoffeeApi;

