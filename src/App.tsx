import MenuItem from "./components/MenuItem"
import OrderContest from "./components/OrderContest"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {
  const {order, addItem, removeItem, tip, setTip, placeOrder} = useOrder()
 
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
                  addItem={addItem}
                />
              ))
            }            
          </div>       
        </div>  

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
                < OrderContest 
                  order={order}
                  removeItem={removeItem}
                />
      
                < TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                />
      
                < OrderTotals 
                  tip={tip}
                  order={order}
                  placeOrder={placeOrder}
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

      
    </>
  )
}

export default App
