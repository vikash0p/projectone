import { useGlobalFilter } from '@/context/FilterProvider'
import React from 'react'

export default function FilterSection() {
  const { filterState: {
    filters: {
      text
    }
  }, updateFilterValue } = useGlobalFilter();
  console.log(text);
  return (
    <div>
      <form action="" onSubmit={(e)=>e.preventDefault()}>
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
      </form>
    </div>
  )
}
