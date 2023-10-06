import { TrainBox } from "./TrainBox"

export function Transit() {
  return (
    <div
      className="border-2 border-blue-600 rounded-lg shadow-md p-4 bg-blue-400 w-5/6
    "
    >
      <h1 className="text-2xl font-semibold mb-2 text-center"> Transit A </h1>
      <div className="flex flex-wrap gap-4 justify-evenly">
        <TrainBox />
        <TrainBox />
        <TrainBox />
      </div>
    </div>
  )
}
