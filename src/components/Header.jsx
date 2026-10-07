import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const {count}=useSelector((state)=>state.counter)

  return (
    <div className='h-32 flex justify-center items-center bg-black text-white' >
        <p className='text-3xl font-bold'></p>
        Count:{count}
    </div>
  )
}

export default Header