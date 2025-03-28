import { MenuItem } from "../types"

type MenuItemProps = {
 item: MenuItem
}

export default function MuneItem({item} : MenuItemProps){
  return (
           
    <button className="cursor-pointer border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-md ">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>  
    
  )
}