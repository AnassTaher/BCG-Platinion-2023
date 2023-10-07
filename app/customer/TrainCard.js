"use client"

import QRCode from "qrcode"
import { useEffect, useRef, useState } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { CustomerHeading } from "./CustomerHeading"
import { CustomerRoute } from "./CustomerRoute"
import { CustomerStops } from "./CustomerStops"
import { CustomerTrips } from "./CustomerTrips"

export function TrainCard({ id }) {
  const [delay, setDelay] = useState(false)
  const [bg, setBg] = useState("white")
  const [time, setTime] = useState("09:30")
  const [from, setFrom] = useState("Amsterdam")
  const [to, setTo] = useState("Dusseldorf")

  const passengers = [
    {
      ticket: "d8801993-70ed-4695-bbc8-4d38d96eda81",
      journey: ["Dusseldorf", "Wuppertal", "Berlin"],
      delay: [0, 0, 30],
      wait: [false, false, true],
      canceled: false,
      active: false,
      time: "09:30",
    },
    {
      ticket: "ae1dadb4-40a4-46e1-bda0-0a89cf3f2436",
      journey: ["Munich", "Wuppertal", "Berlin"],
      delay: [0, 0, 60],
      wait: [true, true, true],
      canceled: true,
      active: false,
      time: "15:00",
    },
    {
      ticket: "8b20906e-9036-4cfb-aab4-0ce0774f6072",
      journey: ["Berlin", "Hamburg", "Wuppertal"],
      delay: [0, 0, 0],
      wait: [false, false, false],
      canceled: false,
      active: false,
      time: "12:00",
    },
  ]

  const qrCodeData = "294e8bb9-02ed-4d6a-8474-4b6946700dea" // Replace with your encoded QR code string
  const qrCodeRef = useRef()

  const foundPassenger = passengers.find((passenger) => passenger.ticket === id)
  useEffect(() => {
    const timeout = setInterval(async () => {
      const res = await fetch("http://localhost:3000/")
      const data = await res.json()
      setDelay(data.is_delayed)
      setTime(data.expected_arrival)
      setFrom(data.from)
      setTo(data.to)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className="grid gap-8  shadow-lg p-8 border-2 rounded-lg border-black sm:w-screen"
      style={{
        backgroundColor:
          Math.max(...foundPassenger.delay) > 0 ? "rgb(254 202 202)" : "white",
      }}
    >
      <CustomerHeading from={foundPassenger.journey[0]} />
      <CustomerRoute
        from={foundPassenger.journey[0]}
        to={foundPassenger.journey[2]}
      />
      <CustomerTrips journey={foundPassenger.journey} />
      <CustomerStops
        delay={Math.max(...foundPassenger.delay) > 0}
        time={foundPassenger.time}
        from={foundPassenger.journey[1]}
        to={foundPassenger.journey[2]}
      />
      <div className="flex items-center gap-1 justify-center p-2">
        <FaExclamationTriangle
          className="text-red-500 mr-1"
          style={{
            display: Math.max(...foundPassenger.delay) > 0 ? "inline" : "none",
          }}
        />

        <p className="mb-0 text-3xl text-red-600">+{Math.max(...foundPassenger.delay)} min</p>
      </div>
    </div>
  )
}
