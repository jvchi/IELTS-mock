import { User } from "../src/assets/data/user"

export default function UserDetails(){

  return(
    <div className="w-[80%] h-[600px] bg-neutral-50 mx-auto mt-8 px-16 py-12 flex justify-between flex-col relative">
      <h1 className="font-semibold text-5xl "> 
          IELTS Academic
      </h1>

      {/* User details */}
      <ul className="grid grid-cols-2">
        {User.map((item) => (
          <li key={item.id} className="flex flex-col gap-2 mb-4 my-12">
            <span className="font-medium text-3xl text-red-900">{item.title}</span>
            <span className="font-medium">{item.data}</span>
          </li>
        ))}
      </ul>
      
      {/* Nofication */}
      <div className="w-full h-[100px] bg-neutral-800 text-white rounded grid grid-cols-1 grid-rows-2 items-center px-12 py-4 ">
        <h1>About this result</h1>
        <span>Your results online are not official. They are provisional only until you receive your official Test Report Form (TRF).</span>
      </div>
    </div>

  )
}