import React, { useEffect, useRef } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

const Search = ({ searchTerm, setSearchTerm }) => {
    const inputRef = useRef(null);

   useEffect(() => {
        const timer = setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        });

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='w-full max-w-md mx-auto mb-4 px-4'>
           
            <div className='relative flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-2.5 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100'>
                
                {/* Search Icon */}
                <FiSearch className="text-gray-400 text-lg mr-2 shrink-0" />
                
                {/* Search Input */}
                <input 
                    ref={inputRef}
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full bg-transparent outline-none text-sm text-slate-800'
                />

                {searchTerm && (
                    <button 
                        onClick={() => {
                            setSearchTerm('');
                            if (inputRef.current) inputRef.current.focus();
                        }}
                        className='text-gray-400 hover:text-slate-600 ml-2 shrink-0'
                    >
                        <FiX className="text-lg" />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Search