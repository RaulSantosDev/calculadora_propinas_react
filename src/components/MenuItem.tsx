import { OrderActions } from "../reducer/order-reducer"
import { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  dispatch: React.ActionDispatch<[action: OrderActions]>
}

export default function MuneItem({item, dispatch} : MenuItemProps){
  return (
           
    <button 
      className="cursor-pointer border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-md "
      onClick={() => dispatch({type: "add-item", payload: {item}})}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>  
    
    
  )
}