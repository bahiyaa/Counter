import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter1() {
    // components can access the state by useSelector hook
    const counterValue= useSelector((state)=>state.counter1.value);
    const [range,setRange]=useState("")
    // useDispatch() is hook used to call a method in action to update the state
    const dispatch =useDispatch();
    console.log(counterValue);
    

  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center w-100 mt-3'>
    <h2 style={{fontSize:"70px",color:'black'}}>{counterValue}</h2>
    <div className='mt-5'>
        <button className='btn btn-danger p-2' onClick={()=>dispatch(decrement(Number(range)))}>DECREMENT</button>
        <button className='btn btn-success p-2 ms-3' onClick={()=>dispatch(increment())}>INCREMENT</button>
        <button className='btn btn-danger p-2 ms-3' style={{width:'120px'}} onClick={()=>dispatch(reset())}>RESET</button>
    </div>
    </div>
    <div>
        <input type="text" className='form-control mt-3 w-100' style={{borderColor:'blue'}} placeholder='Enter The Range' 
        onChange={(e)=>setRange(e.target.value)}
        />
    </div>
    </>
  )
}

export default Counter1