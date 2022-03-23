import React from 'react'
import './styles.css'
const Dropdown = ({ data }) => {
  return (
    <div className="dropdown">
      <div className="selected-value">Select country...</div>
      <div className="arrow"></div>

      <div className="options">
        {data.map((i) => {
          return (
            <option key={i.driverCode} value={i.driverCode}>
              {i.displayName}
            </option>
          )
        })}
      </div>
    </div>
  )
}
export default Dropdown
