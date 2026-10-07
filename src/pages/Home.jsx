import React from 'react'
import HeroSection from '../components/HeroSection' 
import Products from '../components/Products'

const Home = () => {
    return (
        <div className='w-full'>
            {/* HERO SLIDER SECTION */}
            <HeroSection />

            {/* FEATURED PRODUCTS SECTION */}
            <section id="products" className='max-w-7xl mx-auto px-6 py-16 space-y-4'>
                <div className='text-center space-y-2 mb-10'>
                    <h2 className='text-3xl font-extrabold text-gray-900'>Our Featured Products</h2>
                    <p className='text-gray-500 text-sm max-w-md mx-auto'>
                        Explore our wide range of supermarket essentials, handpicked to ensure top quality for your daily needs.
                    </p>
                </div>

                <Products limit={4} />
            </section>
        </div>
    )
}

export default Home;