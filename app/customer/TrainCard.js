"use client"

import { CustomerHeading } from "./CustomerHeading"
import { CustomerRoute } from "./CustomerRoute"
import { CustomerStops } from "./CustomerStops"
import { CustomerTrips } from "./CustomerTrips"
import { useEffect, useState } from "react"

export function TrainCard() {

  const [delay, setDelay] = useState(false)
  const [bg, setBg] = useState("white")

  console.log(delay, bg)

  // useEffect(() => {
  //   const timeout = setInterval(() => {
  //     setDelay((delay) => !delay)
  //     setBg((delay) ? "red" : "white")
  //   }, 5000)
  //   return () => clearTimeout(timeout)
  // }
  // , [])
  return (
    <div className="grid gap-8  shadow-lg p-8 border-2 rounded-lg border-black sm:w-screen" style={{
      backgroundColor: "rgb(253 164 175)"
    }}>
      <CustomerHeading />
      <CustomerRoute />
      <CustomerTrips />
      <CustomerStops />
    </div>
  )
}
