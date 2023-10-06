"use client"

import React, { useState } from "react"
import Select from "react-select"

// Sample list of passengers (you can replace this with your data)
const passengers = [
  { value: "1", label: "Passenger 1" },
  { value: "2", label: "Passenger 2" },
  { value: "3", label: "Passenger 3" },
  { value: "4", label: "Passenger 4" },
]

export function DropDown() {
  const [selectedPassenger, setSelectedPassenger] = useState(null)

  const handleChange = (selectedOption) => {
    setSelectedPassenger(selectedOption)
  }

  return (
    <div className="">
      <Select
        id="passengerDropdown"
        options={passengers}
        value={selectedPassenger}
        onChange={handleChange}
        isClearable={true} // Allow clearing the selection
        placeholder={passengers[0].label}

        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            background: "#BFDBFE",
          }),
        }}
      />
    </div>
  )
}
