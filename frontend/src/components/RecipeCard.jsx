import React from 'react'
import {HiHeart} from 'react-icons/hi2'
function RecipeCard({id,title,image}) {
  return (
    <div className='shadow-md flex justify-between flex-col gap-3 p-3 rounded-lg bg-white '>
        <div className='overflow-hidden'>
            <img src={image} alt={title} width={250} className='rounded-lf hover:scale-105 transition-all duration-500 ease-out '/>
        </div>
        <div className='flex justify-between items-center'>
            <span>{title}</span>
            <HiHeart className='text-red-500 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer '/>
        </div>
    </div>
  )
}

export default RecipeCard