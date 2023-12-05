import { useSelector, useDispatch } from 'react-redux';
import { decrement, divide, increment, multiply } from '../reducerss/calculatorReducer';
import { useState } from 'react';

function Calculator() {
    const [inp, setInp] = useState('')
    const[inp2,setInp2]=useState('')
    const dispatch = useDispatch()
    const counterValue = useSelector((state) => state.counter.value)

    console.log(inp);
    return (
        <div>
            <input type="number" value={inp} onChange={(e)=>setInp(Number(e.target.value))}  />
            <input type="number" value={inp2} onChange={(e)=>setInp2(Number(e.target.value))}  />
            <p>Counter Value: {counterValue}</p>
            <button onClick={() => dispatch(increment({
                num1:inp,
                num2:inp2
            }))}>+</button>
            <button onClick={() => dispatch(decrement({
                  num1:inp,
                  num2:inp2
            }))}>-</button>
            <button onClick={() => dispatch(multiply({
                  num1:inp,
                  num2:inp2
            }))}>*</button>
            <button onClick={() => dispatch(divide({
                num1:inp,
                num2:inp2
            }))}>/</button>
        </div>
    )
}

export default Calculator