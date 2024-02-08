import React from 'react'
import ProductGridViewCard from '../ReausableComp/ProductGridViewCard'
import ProductListViewCard from '../ReausableComp/ProductListViewCard'

export default function ProductList({ filter_product, grid_view }) {
  return (
    <div className={`${grid_view === true ?"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 w-full" : ""}`} >
      {
        filter_product.map((value,indx)=>{
          return(
            <section key={value.id}>
              {
                grid_view === true ? (<ProductGridViewCard value={value} key={value.id} />) : (<ProductListViewCard value={value} key={value.id} />)
              }
            </section>
          )
        })
      }
      
      
    </div>
  )
}
