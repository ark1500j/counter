"use client"

import { useCounter } from '@/state/useCounter'
import dynamic from 'next/dynamic';
// import React, { useState } from 'react'



 const Count = () => {

  const increment= useCounter(state=>state.increment);
  const decrement= useCounter(state=>state.decrement);
  const count= useCounter(state=>state.count);
    
  return (
    <div className='mt-24'>
    <h1>Counter App with zustand</h1>
        <div className='my-10 mx-4'>Count: {count}</div>
        <button onClick={increment} className='mx-10 py-2 px-10 rounded bg-slate-600' >up</button>
        <button onClick={decrement}  className='mx-10 py-2 px-10 rounded bg-slate-600' >down</button>
    </div>
  )
}
export default dynamic (() => Promise.resolve(Count), {ssr: false})
// const [state,setState]= useState(0);

// function handleCountUp(){
//     setState((prev)=>{
//         return prev +1;
//     })
// }
// function handleCountDown(){
//     setState((prev)=>{
//         return prev -1;
//     })
// }