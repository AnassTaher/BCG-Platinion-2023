"use client"

import { useEffect, useState } from "react"
import { TrainBox } from "./TrainBox"
import { Transit } from "./Transit"

export default function Page() {

  const [start, setStart] = useState("11:30")
  const [end, setEnd] = useState("13:30")

  useEffect(() => {
    const timeout = setInterval(async() => {
      const res = await fetch("http://localhost:3000/")
      const data = await res.json()
      setStart(data.departure_time)
      setEnd(data.expected_arrival)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])


  const journeys = [
    {
      id: 1,
      trains: [
        {
          id: 1,
          from: "Amsterdam",
          to: "Dusseldorf",
          departure: "11:50 - 13:50",
          delay: "2 hours",
        },
        {
          id: 2,
          from: "Dusseldorf",
          to: "Berlin",
          departure: "14:30 - 17:00",
          delay: "30 minutes",
        },
        {
          id: 3,
          from: "Berlin",
          to: "Hamburg",
          departure: "18:30 - 20:00",
          delay: "No delay",
        },
      ],
    }
    // Add more journeys as needed
  ]
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Train Departures</h1>
      <div className="flex justify-evenly">
        {journeys.map((journey) => (
          <div
            key={journey.id}
            className="bg-blue-300 border border-blue-400 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-xl font-semibold mb-2 text-center">Journey {journey.id}</h2>
            <div className="flex gap-8">
              {journey.trains.map((train) => (
                <TrainBox
                  key={train.id}
                  start={start}
                  end={end}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
