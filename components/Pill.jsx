import { Result } from "../src/assets/data/Result"
export default function Pill(){
  return(
    <div className="w-[80%] h-[100px]  mx-auto mt-8 p-8 flex justify-between items-center">
      {Result.map((item) => (
        <div key={item.id} className="flex flex-col gap-2  rounded px-4 py-2 bg-white w-44 shadow-2xl">
          <span className="font-bold text-[14px]">{item.name}</span>
          <span className="text-red-500 font-extrabold text-3xl">{item.score}</span>
        </div>
      ))}
    </div>
  )
}