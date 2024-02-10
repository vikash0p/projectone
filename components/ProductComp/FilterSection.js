import { useGlobalFilter } from '@/context/FilterProvider'
import React from 'react'

export default function FilterSection() {
  const { filterState: { all_Product, filters: { text, category, company, colors, price, maxPrice, minPrice }, }, updateFilterValue, clearFilter } = useGlobalFilter();


  const ProductFilter = (data, key) => {
    let newValue = data.map((value, indx) => {
      return value[key]
    })
    if (key === "colors") {
      return newValue = ["All", ...new Set([].concat(...newValue))];
    }
    else {
      return newValue = ["All", ...new Set(newValue)]

    }

  }


  const filterCategory = ProductFilter(all_Product, "category");

  const filterCompany = ProductFilter(all_Product, "company");


  const filterColors = ProductFilter(all_Product, "colors");
  // console.log("🚀 ~ file: FilterSection.js:29 ~ filterColors:", filterColors);


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
            placeholder='SEARCH'
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
                  className={`w-full py-2 bg-slate-800 text-white ${category === value ? "bg-red-800 " : ""}`}
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
        {/* company filter section */}
        <section className="flex flex-col gap-1  ">
          <h1>company</h1>
          {
            filterCompany.map((value, indx) => {
              return (
                <button
                  type="button"
                  key={indx}
                  className={`w-full py-2 bg-slate-800 text-white ${company === value ? "bg-red-800" : ""}`}
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

        {/* colors filter section  */}
        <section className=" w-full flex px-2  py-5 gap-1  ">
          {
            filterColors.map((value, indx) => {
              if (value === "All") {
                return (
                  <button
                    type="button"
                    key={indx}
                    className={`w-8  h-8  text-xl rounded-full ${colors === value ? "w-9 h-9 bg-white rounded-none" : "opacity-50"} `}
                    style={{ backgroundColor: value }}
                    name={"colors"}
                    value={value}
                    onClick={updateFilterValue}
                  >
                    All
                  </button>
                )
              }
              return (
                <button
                  type="button"
                  key={indx}
                  className={`w-8  h-8 rounded-full text-violet-800 ${colors === value ? "w-9 h-9 rounded-none" : "opacity-50"} `}
                  style={{ backgroundColor: value }}
                  name={"colors"}
                  value={value}
                  onClick={updateFilterValue}
                >
                  {colors === value ? "✔️ " : null}
                </button>
              )
            })
          }
        </section>

        {/* price range */}
        <section className='py-10'>
          <div class="w-full">
            <label htmlFor="volume" class="block text-sm font-medium text-gray-700">price</label>
            <input
              type="range"
              id="price"
              name="price"
              min={minPrice}
              max={maxPrice}
              step={"10"}
              value={price}
              onChange={updateFilterValue}
              class="block w-full mt-1 bg-slate-950 accent-green-700 appearance-none rounded-md h-5 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
        </section>
        {/* clear all data */}
        <section>
          <button
            type="button"
            className='px-6 py-2 rounded-sm bg-violet-800 text-white'
            onClick={clearFilter}

          >filter clear</button>
        </section>
      </form>
    </div>
  )
}
