import { OrderItem } from "../types"
import { useCallback } from "react"
//import { useMemo } from "react"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps ) {

    const subTotalOrder = useCallback(() => order.reduce( (total, item) => total + 
    (item.quantity * item.price), 0), [order])

    const tipAmount = useCallback (() => subTotalOrder() * tip, [tip, order])

    const totalAmount = subTotalOrder() + tipAmount()
    

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar:{' '} 
                    <span className="font-bold">${subTotalOrder()}</span>
                </p>

                <p>Propina:{' '} 
                    <span className="font-bold">${tipAmount()}</span>
                </p>

                <p>Total a pagar:{' '} 
                    <span className="font-bold">${totalAmount}</span>
                </p>
            </div>

            <button 
                className="w-full bg-black text-white font-bold p-3 mt-10 disabled:opacity-10 cursor-pointer rounded-sm shadow-md"
                disabled={totalAmount === 0}
                onClick={placeOrder}                
            >
                Guardar Orden
            </button>
        </>
    )
}

