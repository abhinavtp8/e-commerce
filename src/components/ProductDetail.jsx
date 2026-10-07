// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams, Link } from 'react-router-dom' 
// import { FiArrowLeft } from "react-icons/fi"
// import Loading from '../components/Loading'

// const ProductDetail = () => {
//     const { id } = useParams() 
//     const [product, setProduct] = useState(null)
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         const fetchProduct = async () => {
//             if (!id) return;
//             try {
//                 setLoading(true)
//                 const response = await axios.get(`https://dummyjson.com/products/${id}`)
//                 setProduct(response.data)
//             } catch (error) {
//                 console.error("Error fetching product details:", error)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchProduct()
//     }, [id])

//     if (loading) {
//         return <Loading />
//     }

//     if (!product) {
//         return <div className="text-center py-24 text-gray-500">Product not found.</div>
//     }

//     return (
//         <div className="p-4 max-w-6xl mx-auto pt-24">
//             <Link
//                 to="/products"
//                 className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2 font-semibold text-lg w-fit"
//             >
//                 <FiArrowLeft className="shrink-0" />
//                 <span>Back to Products List</span>
//             </Link>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//                 <div className="flex items-center justify-center bg-slate-50 rounded-xl p-4 h-96">
//                     <img src={product.thumbnail} alt={product.title} className="max-h-full object-contain" />
//                 </div>
                
//                 <div className="flex flex-col justify-between">
//                     <div>
//                         <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
//                         <p className="text-sm text-gray-500 mt-2">{product.description}</p>
//                         <div className="mt-6 flex items-center gap-3">
//                             <span className="text-3xl font-extrabold text-gray-950">${product.price}</span>
//                             {product.discountPercentage > 0 && (
//                                 <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-md shadow-sm">
//                                     {Math.round(product.discountPercentage)}% OFF
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                     <div className="mt-8 space-y-2 border-t pt-4 text-sm text-gray-600">
//                         <div className="flex justify-between"><span>Weight:</span> <span className="font-semibold text-gray-900">{product.weight}g</span></div>
//                         <div className="flex justify-between"><span>Warranty:</span> <span className="font-semibold text-gray-900">{product.warrantyInformation}</span></div>
//                         <div className="flex justify-between"><span>Shipping:</span> <span className="font-semibold text-gray-900">{product.shippingInformation}</span></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductDetail