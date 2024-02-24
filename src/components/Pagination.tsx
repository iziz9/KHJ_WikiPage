import React from 'react'

const Pagination = () => {
  return (
    <nav className="my-4">
      <ol className="flex justify-center gap-4 text-lg">
        <li className="cursor-pointer hover:text-main">1</li>
        <li className="cursor-pointer hover:text-main">2</li>
        <li className="cursor-pointer hover:text-main">3</li>
        <li className="cursor-pointer hover:text-main">4</li>
        <li className="cursor-pointer hover:text-main">5</li>
      </ol>
    </nav>
  )
}

export default Pagination
