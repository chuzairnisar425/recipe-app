import React from 'react'
import {HiHeart} from 'react-icons/hi2'
function RecipeCard() {
  return (
    <div className='shadow-md flex flex-col gap-3 p-3 rounded-lg bg-white'>
        <div className='overflow-hidden'>
            <img src="https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg" alt="" width={250} className='rounded-lf hover:scale-105 transition-all duration-500 ease-out '/>
        </div>
        <div className='flex justify-between items-center'>
            <span>Chick-Fil-A Sandwich</span>
            <HiHeart className='text-red-500 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer '/>
        </div>
    </div>
  )
}

export default RecipeCard