import { Result } from "../src/assets/data/Result"
export default function Pill(){
  return(
    <div className="w-[80%] h-[100px] bg-neutral-50 mx-auto mt-8 p-8 flex justify-between items-center">
      {Result.map((item) => (
        <div key={item.id} className="flex flex-col gap-2 bg-neutral-200 rounded-2xl px-4 py-2">
          <span className="font-bold text-lg">{item.name}</span>
          <span className="text-red-500 font-bold text-2xl">{item.score}</span>
        </div>
      ))}
    </div>
  )
}