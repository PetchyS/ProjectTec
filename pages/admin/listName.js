import React from 'react'
import StuL1 from '../Components/StuL';
import Table1 from '../Components/Table1';
import ComplexNavbar from '../Components/newNav';


export default function () {
  const iconSize = "large"
  return (
    <div>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ComplexNavbar className="my-5"/>
          <div><StuL1/></div>
          <div><Table1 /></div> 
        </div> 
    </div>
  )
}
