'use client'
import React from 'react'
import { IoGridSharp } from "react-icons/io5";
import { PiListFill } from "react-icons/pi";

export default function Sort({ filter_product, grid_view, setGridView, setListView, sorting, product_value }) {
  // console.log(product_value);
  return (
    <div className='flex justify-between px-3 items-center h-full'>
      <div className="flex gap-4 items-center ">
        <button type="button " className={`${grid_view == true ? "text-green-700" : "text-red-700"}`} onClick={setGridView}><IoGridSharp size={25} /></button>
        <button type="button " className={`${grid_view == false ? "text-green-700" : "text-red-700"} `} onClick={setListView}><PiListFill size={30} /></button>


      </div>
      <div className="">
        <h5>{`${filter_product.length} total Products`} </h5>
      </div>
      <div className="">
        <form action="">
          <div className="w-44">
            <label htmlFor="sort" className=" "></label>
            <select id="sort" name="sort"
              value={product_value}
              onChange={sorting}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            >
              <option className='rounded-none py-2 ' value="lowest">Price(lowest) </option>
              <option className='rounded-none py-2 ' value="highest">Price(highest)</option>
              <option className='rounded-none py-2 ' value="increasing">Ascending </option>
              <option className='rounded-none py-2 ' value="decreasing">Descending</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}
