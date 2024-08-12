import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Foater from '../Components/Foater'


function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Foater />
    </>
  );
}

export default Courses
