"use client"

import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function Courses() {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-4 p-5'>
      {/* Left Container */}
      <div className='col-span-3'>
        {/* Banner */}
        <WelcomeBanner/>

        {/* Course List Section */}
        <CourseList/>
      </div>
      {/* Right Container */}
      <div>
        Right Section
      </div>
    </div>
  )
}

export default Courses