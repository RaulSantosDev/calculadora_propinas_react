import { OrderItem, MenuItem } from '../types'

type OrderContestProps = {
    order: OrderItem[]
    removeItem: (id : MenuItem["id"]) => void
  }

const OrderContest = ({order, removeItem} : OrderContestProps) => {
  return (
    <div>
      <h1 className="text-center font-black text-4xl">Consumo</h1>
      
      <div className="space-y-3 mt-10">
        
            
            {order.map(item => (
                  <div 
                      className="flex justify-between items-center border-t border-gray-200 py-3 last-of-type:border-b"
                      key={item.id}
                      >
                      <div>
                        <p>{item.name} - ${item.price}</p>
                        <p className="font-black">Cantidad {item.quantity} - ${item.quantity * item.price}</p>
                      </div>

                      <button 
                        className="bg-red-700 w-8 h-8 rounded-full font-black text-white cursor-pointer"
                        onClick={() => removeItem(item.id)}
                      >
                          X
                      </button>
                  </div>
            ))}
      </div>

    </div>
  )
}

export default OrderContest
