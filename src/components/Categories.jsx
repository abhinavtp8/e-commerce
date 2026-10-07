import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Categories = ({ setCategorisedProducts, setSearchTerm }) => {
    const [categories, setCategories] = useState([])

    // FETCH CATEGORIES LIST
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products/categories")
                setCategories(response.data)
            } catch (error) {
                console.error("Error fetching categories:", error)
            }
        }
        fetchCategories()
    }, [])

    // HANDLE CATEGORY FILTER
    const handleCategorise = async (url) => {
        try {
            const response = await axios.get(url)
            setCategorisedProducts(response.data.products)
            setSearchTerm('') 
        } catch (error) {
            console.error("Error filtering category:", error)
        }
    }

    return (
        <div className='flex gap-3 flex-wrap items-center justify-start'>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider shrink-0">
                Filter by Category:
            </h2>
            
            <button
                onClick={() => {
                    setCategorisedProducts([]);
                    setSearchTerm('');
                }}
                className='bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold rounded-full px-4 py-1.5 cursor-pointer transition-all shrink-0'
            >
                All Products
            </button>

            {categories.map((item) => (
                <button
                    className='bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold rounded-full px-4 py-1.5 cursor-pointer transition-all shrink-0'
                    key={item.slug}
                    onClick={() => handleCategorise(item.url)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    )
}

export default Categories