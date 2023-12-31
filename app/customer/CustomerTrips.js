export function CustomerTrips({journey}) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Train trips</h2>
      <div className="flex flex-col gap-0.5">
        <span className="pl-8 text-gray-600 text-xl italic">{journey[0]} to {journey[1]}</span>
        <span className="pl-8 text-gray-600 text-xl italic">{journey[1]} to {journey[2]}</span>
      </div>
    </div>
  )
}
