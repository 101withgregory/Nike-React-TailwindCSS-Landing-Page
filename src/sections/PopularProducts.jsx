import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

function PopularProducts() {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-bold text-4xl font-palanquin font-bold text-left'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 text-slate-gray font-montserrat text-left'>Experience top-notch quality and style with our sought -after selections.Discover a world of comfort, design , and value</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
         {products.map((product)=>{
          return <PopularProductCard key={product.name} {...product}/>
         })}
      </div>
    </section>
  )
}

export default PopularProducts