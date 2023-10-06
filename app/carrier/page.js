import { TrainBox } from "./TrainBox"
import { Transit } from "./Transit"

export default function Page() {
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
    },
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
    },
    // Add more journeys as needed
  ]
  return (
    // <div className="p-4 border bg-blue-700 border-black  shadow-lg">
    //   <h1 className="text-2xl font-semibold mb-2 text-center">
    //     Carrier Schedule
    //   </h1>
    //   <div className="flex flex-col items-center gap-8">
    //     <Transit />
    //     <Transit />
    //     <Transit />
    //     <Transit />
    //   </div>
    // </div>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Train Departures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {journeys.map((journey) => (
          <div
            key={journey.id}
            className="bg-blue-300 border border-blue-400 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-xl font-semibold mb-2">Journey {journey.id}</h2>
            <div className="grid grid-cols-1 gap-4">
              {journey.trains.map((train) => (
                <TrainBox
                  key={train.id}
                  from={train.from}
                  to={train.to}
                  departure={train.departure}
                  delay={train.delay}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
