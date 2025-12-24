import { useState } from 'react'

function App() {

  return (
    <div className="bg-gray-50 rounded-2xl shadow-xl w-[360px] sm:w-[500px] h-[250px] sm:h-[325px] absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-3">
      <div className="text-8xl font-semibold sm:text-9xl">
        <span>25</span>
        <span>:</span>
        <span>00</span>
      </div>
      <div className="flex gap-4">
        <button className="bg-green-700 active:bg-green-800 text-white text-2xl px-4 py-1 w-25 rounded-sm cursor-pointer">Start</button>
        <button className="bg-red-700 active:bg-red-800 text-white text-2xl px-4 py-1 w-25 rounded-sm cursor-pointer">Pause</button>
      </div>
    </div>
  )
}

export default App
