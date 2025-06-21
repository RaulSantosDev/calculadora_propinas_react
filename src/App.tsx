import MenuItem from "./components/MenuItem"
import OrderContest from "./components/OrderContest"
import { menuItems } from "./data/db"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { orderReducer, initialState} from "./reducer/order-reducer"
import { useReducer } from "react"

function App() {
  
  const [ state, dispatch]= useReducer(orderReducer, initialState)
 
  return (
    <>
      <header className="bg-emerald-400 py-5">
        <h1 className="text-center text-4xl font-black ">Calculadora de propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto py-5 grid md:grid-cols-2">
        <div className="p-5">
          <h1 className="text-center font-black text-4xl ">Menú</h1>   
          <div className="space-y-3 mt-10">
            {
              menuItems.map( item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                />
              ))
            }            
          </div>       
        </div>  

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length ? (
            <>
                < OrderContest 
                  order={state.order}
                  dispatch={dispatch}
                />
      
                < TipPercentageForm
                  dispatch={dispatch}
                  tip={state.tip}
                />
      
                < OrderTotals 
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
            
            </>
          ) : (
            <p className="text-center ">La orden esta vacía</p>
          )
          }
        </div>

        <div>
        </div>


      </main>

      <footer className="bg-emerald-600 text-center py-3 ">
        <small className="text-white font-bold">Developed and designed by Raymundo Santos ©2025. All rights reserved.</small>
      </footer>
      
    </>
  )
}

export default App
