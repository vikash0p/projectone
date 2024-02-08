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
      <form action="" className='flex flex-col gap-4  w-full' onSubmit={(e) => e.preventDefault()}>
        <section>
          <label htmlFor="text"></label>
          <input
            type="text"
            name="text"
            id="text"
            className='w-full h-10 px-3 bg-slate-100 mt-2'
            placeholder='SEARCH YOU'
            value={text}
            onChange={updateFilterValue}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h1>Category</h1>
          {
            filterCategory.map((value, indx) => {
              // console.log(value)
              return (
                <button
                  type="button"
                  key={indx}
                  className='w-full py-2 bg-slate-800 text-white'
                  name={"category"}
                  value={value}
                  onClick={updateFilterValue}
                >
                  {value}
                </button>
              )
            })
          }
        </section>
       
        <section className="flex flex-col gap-1 overflow-y-scroll ">
          <h1>company</h1>
          {
            filterCompany.map((value, indx) => {
              return (
                <button
                  type="button"
                  key={indx}
                  className='w-full py-2 bg-slate-800 text-white'
                  name={"company"}
                  value={value}
                  onClick={updateFilterValue}
                >
                  {value}
                </button>
              )
            })
          }
        </section>
      </form>
    </div>
  )
}
