import { OrderActions } from "../reducer/order-reducer"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  }
]

type tipPercentageFormProps = {
  tip: number
  dispatch: React.ActionDispatch<[action: OrderActions]>
}


export default function TipPercentageForm({dispatch, tip} : tipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>

      <form action="">
        {tipOptions.map( tipOption => (
          <div className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>

            <input  
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={e => dispatch({type: "add-tip", payload: {value: +e.target.value}})}
              checked={tipOption.value === tip}
            
            />

          </div>
        ))}

      </form>
    </div>
  )
}
