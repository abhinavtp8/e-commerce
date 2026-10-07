import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, addByValue } from '../features/Counter/CounterSlice';
import Header from './Header';

const Counter = () => {

    const [value, setValue] = useState(0)
    const [num, setNum] = useState(0); 


    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch()

    const decre = () => {
        dispatch(decrement())
    }
    const incre = () => {
        dispatch(increment())
    }

    const incrementByValue = () => {
        dispatch(addByValue(Number(value)))
        setValue(0)
    }


    const expensiveCalculation = (value) => {
        console.log("calculating..");
        return value * 2
    }

    const result = useMemo(() => {
        return expensiveCalculation(num)
    }, [num])



    return (
        <>
            <Header />
            <div className='h-screen flex flex-col gap-6 justify-center items-center bg-slate-50'>
                
                <div className='flex flex-col items-center gap-2'>
                    <label className='text-sm font-semibold text-gray-500'>Test useMemo (Double Value)</label>
                    <input 
                        type="number"
                        value={num} 
                        onChange={(e) => setNum(Number(e.target.value))} 
                        className='border border-gray-300 outline-none rounded-full px-5 py-2 text-center'
                        placeholder="Enter number"
                    />
                </div>

                <hr className='w-1/4 border-gray-200' />

                <div className='flex gap-4 justify-center items-center'>
                    <button onClick={decre} className='bg-red-100 text-red-800 rounded-full px-5 py-2 hover:bg-red-200 transition-all'>
                        Decrement
                    </button>

                    <p className='text-4xl font-bold'> {count}</p>

                    <button onClick={incre} className='bg-green-100 text-green-800 rounded-full px-5 py-2 hover:bg-green-200 transition-all'>
                        Increment
                    </button>

                    <input 
                        type="number" 
                        className='border border-gray-300 outline-none rounded-full px-5 py-2 text-center w-24' 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        
                    />
                    <button onClick={incrementByValue} className='bg-blue-100 text-blue-800 rounded-full px-5 py-2 hover:bg-blue-200 transition-all'>
                        Add
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter