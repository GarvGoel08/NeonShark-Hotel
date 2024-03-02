import React from 'react'
import './Filters.css'
import FilterCard from './FilterCard'
export default function Filters() {
  return (
    <div className="FiltersDiv">
        <div className="FiltersDiv-2">
          <FilterCard/>
          <FilterCard/>
          <FilterCard/>
          <FilterCard/>
        </div>
      </div>
  )
}
