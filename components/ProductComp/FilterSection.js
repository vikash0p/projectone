import React from 'react'

export default function FilterSection() {
  return (
    <div>
      <form action="">
        <label htmlFor="text"></label>
        <input
          type="text"
          name="text"
          id="text"
          className='w-full h-10 px-3 bg-slate-100'
          placeholder='SEARCH YOU'
        />
      </form>
    </div>
  )
}
