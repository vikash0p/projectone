'use client'
import { useGlobalProduct } from '@/context/ProductProvider'
import React from 'react'
import ProductGridViewCard from '../ReausableComp/ProductGridViewCard';

export default function FeatureProduct() {
    const { state: {
        isLoading,
        isError,
        products,
        featureProducts,
    } } = useGlobalProduct();

    // console.log(featureProducts);
    return (
        <div className='w-full min-h-screen'>
            {
                isLoading ? (
                    <div className="w-full h-screen flex justify-center items-center">
                        <h1 className='text-2xl'>Loading....</h1>
                    </div>
                ) :
                    (<>
                        <h1 className='text-2xl font-medium w-full text-center py-5 '>Our Feature Product</h1>
                        <div className="max-w-7xl mx-auto flex justify-between items-center  mt-7 place-items-center  ">
                            {
                                featureProducts.map((value, indx) => {
                                    return (
                                        <ProductGridViewCard value={value} key={indx} />
                                    )
                                })
                            }
                        </div>
                    </>)
            }
        </div>
    )
}
