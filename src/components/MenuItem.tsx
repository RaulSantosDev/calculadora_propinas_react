import { MenuItem } from "../types"

type MenuItemProps = {
 item: MenuItem
 addItem: () => void
}

export default function MuneItem({item, addItem} : MenuItemProps){
  return (
           
    <button 
      className="cursor-pointer border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-md "
      onClick={() => addItem()}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>  
    
  )
}