import React, { useState } from 'react'
import Data from '../utils/mook'
import { NavLink, Outlet } from 'react-router-dom'

const Development = () => {
    const [data, setData] = useState(Data)
  return (
    <div>
      {
        data.map((v) =>(
            v.people?.map((value) =>(
                <NavLink to={value.navigation}>
                <p>{value.title}</p>
                </NavLink>
            ))
        ))
      }
      {}
      <Outlet/>
    </div>
  )
}

export default Development