import { useGlobalFilter } from '@/context/FilterProvider'
import React from 'react'

export default function FilterSection() {
  const { filterState: { all_Product,filters: { text, category, company }, }, updateFilterValue } = useGlobalFilter();


  const ProductFilter = (data, key) => {
    let newValue = data.map((value, indx) => {
      return value[key]
    })

    return newValue = ["All", ...new Set(newValue)]
  }


  const filterCategory = ProductFilter(all_Product, "category");
  const filterCompany = ProductFilter(all_Product, "company");
  // console.log(filterCategory);

  return (
    <div>
      
    </div>
  )
}
