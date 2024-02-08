'use client'
import React from 'react'
import FilterSection from './FilterSection'
import Sort from './Sort'
import ProductList from './ProductList'
import { useGlobalFilter } from '@/context/FilterProvider'

export default function ProductComp() {
    const { filterState: { filter_product, all_Product, grid_view, product_value }, setGridView, setListView, sorting } = useGlobalFilter();
    // console.log(product_value);

    return (
        <div className='max-w-7xl mx-auto flex min-h-screen'>
            <div className="basis-[20%] bg-green-200">
                <FilterSection />
            </div>
            <div className="basis-[80%] bg-blue-200">
                <div className="flex flex-col gap-4">
                    <div className="w-full h-14 bg-yellow-200">
                        <Sort
                            filter_product={filter_product}
                            grid_view={grid_view}
                            setGridView={setGridView}
                            setListView={setListView}
                            sorting={sorting}
                            product_value={product_value}

                             />

                    </div>
                    <div className="">
                        <ProductList filter_product={filter_product} grid_view={grid_view} />
                    </div>
                </div>
            </div>
        </div>
    )
}
