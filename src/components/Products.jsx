import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi"
import Search from './Search'
import Categories from './Categories' 
import axios from 'axios'

const Products = ({ limit }) => {
    const { id } = useParams()
    const isHomePage = !!limit;

    const { data, loading } = useSelector((state) => state.products)
    const [categorisedProducts, setCategorisedProducts] = useState([])
    const [products, setProducts] = useState([])

    const [singleProduct, setSingleProduct] = useState(null)
    const [singleLoading, setSingleLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    // SYNC PRODUCTS STATE
    useEffect(() => {
        if (categorisedProducts.length > 0) {
            setProducts(categorisedProducts)
        } else {
            setProducts(data || [])
        }
    }, [categorisedProducts, data])

    // FETCH SINGLE PRODUCT BY ID
    useEffect(() => {
        const fetchSingleProduct = async () => {
            if (!id) return;

            try {
                setSingleLoading(true)
                const response = await axios.get(`https://dummyjson.com/products/${id}`)
                setSingleProduct(response.data)
            } catch (error) {
                console.error("Error fetching single product:", error)
            } finally {
                setSingleLoading(false)
            }
        }
        fetchSingleProduct()
    }, [id])

    // LOADING RENDER CONDITIONAL
    if (loading || (id && singleLoading)) {
        return <Loading />
    }

    // --- 1. SINGLE PRODUCT VIEW ---
    if (id && singleProduct) {
        return (
            <div className="p-4 max-w-6xl mx-auto pt-24">
                {/* Back Button */}
                <Link
                    to="/products"
                    className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2 font-semibold text-lg w-fit"
                >
                    <FiArrowLeft className="shrink-0" />
                    <span>Back to Products List</span>
                </Link>

                {/* Main Product Detail Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-center bg-slate-50 rounded-xl p-4 h-96">
                        <img src={singleProduct.thumbnail} alt={singleProduct.title} className="max-h-full object-contain" />
                    </div>
                    
                    <div className="flex flex-col space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{singleProduct.title}</h1>
                            <p className="text-sm text-gray-500 mt-2">{singleProduct.description}</p>
                            
                            <div className="mt-6 flex items-center gap-3">
                                <span className="text-3xl font-extrabold text-gray-950">
                                    ${singleProduct.price}
                                </span>
                                {singleProduct.discountPercentage > 0 && (
                                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                                        {Math.round(singleProduct.discountPercentage)}% OFF
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Metadata Details */}
                        <div className="mt-8 space-y-2 border-t pt-4 text-sm border-gray-300 font-bold text-gray-800">
                            <div className="flex justify-between"><span>Weight:</span> <span className="font-semibold text-gray-900">{singleProduct.weight}g</span></div>
                            <div className="flex justify-between"><span>Warranty:</span> <span className="font-semibold text-gray-900">{singleProduct.warrantyInformation}</span></div>
                            <div className="flex justify-between"><span>Shipping:</span> <span className="font-semibold text-gray-900">{singleProduct.shippingInformation}</span></div>
                        </div>
                    </div>
                </div>

                {/* Customer Reviews Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 px-2">
                        Customer Reviews ({singleProduct.reviews ? singleProduct.reviews.length : 0})
                    </h2>
                    
                    {singleProduct.reviews && singleProduct.reviews.length > 0 ? (
                        <div className="space-y-4">
                            {singleProduct.reviews.map((review, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
                                >
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-base">{review.reviewerName}</h4>
                                            <p className="text-xs text-blue-500 font-medium lowercase mt-0.5">
                                                {review.reviewerEmail}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 shrink-0">
                                            <span className="text-xs text-gray-400 font-medium">
                                                {new Date(review.date).toLocaleDateString()}
                                            </span>
                                            <span className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-1 rounded-lg text-xs font-bold border border-amber-200">
                                                ⭐ {review.rating} 
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 italic leading-relaxed">
                                        "{review.comment}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-sm italic px-2">No reviews yet for this product.</p>
                    )}
                </div>
            </div>
        )
    }

    // --- 2. GRID VIEW (NORMAL PRODUCTS LIST) ---
    const safeProducts = products || [];

    const filteredProducts = safeProducts.filter((product) => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

    return (
        <>

            {!isHomePage && (
                <div className='sticky top-16 left-0 z-30 bg-white w-full border-b border-gray-100 pt-10 pb-5 px-6 md:px-12'>
                    <div className="max-w-7xl mx-auto flex flex-col gap-4">
                        
                       
                        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                        {/* Categories */}
                        <Categories 
                            setCategorisedProducts={setCategorisedProducts} 
                            setSearchTerm={setSearchTerm} 
                        />
                    </div>
                </div>
            )}

            {/* PRODUCTS GRID */}
            <div className={`relative z-0 max-w-7xl mx-auto p-6 md:p-12 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
                {
                    displayedProducts.length > 0 ? (
                        displayedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-gray-400">
                            No products found matching "{searchTerm}"
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Products