import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder(){
    const [order, setOrder] = useState< OrderItem[] >([])
    const [tip, setTip] = useState(0)

    function addItem(item : MenuItem) {
        
        const itemExist = order.find( orderI => item.id === orderI.id) // Retorna un true si el id de item coicide con el id de alguno de los valores dentro de order.

        if(itemExist){
            const updateOrder = order.map( orderItem => 
                orderItem.id === item.id ? // Si el id coicide...
                {...orderItem, quantity: orderItem.quantity + 1} : // Toma una copia de orderItem y aumenta 1 a quantity
                orderItem) // Si el id no coicide, retorna solo el elemento ordetItem
            setOrder(updateOrder)
        }else {
            const newItem : OrderItem = {...item, quantity:1}
            setOrder([...order, newItem])            
        }       
        
    }

    function removeItem(id : MenuItem['id']) {
        const updatedOrder = order.filter( orderItem => orderItem.id !== id)
        setOrder(updatedOrder)
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

 
    


    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }

}
